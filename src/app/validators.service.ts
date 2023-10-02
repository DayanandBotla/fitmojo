import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  static CHAZ = '\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29';
  static JAAZ = '\u3000-\u303F\u3040-\u309F\u30A0-\u30FF\uFF00-\uFFEF\u4E00-\u9FAF\u2605-\u2606\u2190-\u2195\u203B';
  static KOREAN_LETTERS = '\uac00-\ud7af\u1100-\u11ff\u3130-\u318f\ua960-\ua97f\ud7b0-\ud7ff';
  static ACCENTEDLETTERS = 'A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff';
  static SPECIALCHAR = "ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ";
  static numbers = '0-9';
  static letters = ValidatorsService.ACCENTEDLETTERS +
                  ValidatorsService.CHAZ +
                  ValidatorsService.KOREAN_LETTERS +
                  ValidatorsService.JAAZ +
                  ValidatorsService.SPECIALCHAR;
  static nameRegex = new RegExp("^([" + ValidatorsService.letters + "\\s\\-])*$");
  static emailRegex = /(?=^(?:[A-Za-z0-9_\xC0-\xFF!#$%&'*+\/=?^`{|}~\\-]\.?){0,63}[A-Za-z0-9_\xC0-\xFF!#$%&'*+\/=?^`{|}~\\-]@[A-Za-z0-9\xC0-\xFF](?:[A-Za-z0-9\xC0-\xFF-]{0,61}[A-Za-z0-9\xC0-\xFF])?(?:\.[A-Za-z\xC0-\xFF](?:[A-Za-z0-9\xC0-\xFF-]{0,61}[A-Za-z0-9\xC0-\xFF])?)*$)(?=^.{3,254}$)/;

  constructor() { }

  static validName(minChar, maxChar) {
    return function (control: FormControl) {
      const name = control.value ? control.value.trim() : control.value;
      let hasCat = /_/;
      //CustomValidators.translationService.instant('errors.loginErrors.loginError1');
      let message;
      if (!name) {
        message = { 'message': "This field is required"}// CustomValidators.translationService.instant('errors.error10') };
      } else if (name && name.length < minChar) {
        message = { 'message': "Minimum " + minChar + "chars req" };
      } else if (name && name.length > maxChar) {
        message = { 'message': "Maximum" + maxChar +"allowed" };
      } else if (!ValidatorsService.nameRegex.test(name) || hasCat.test(name)) {
        message = { 'message': "This field contains chars other than letters" };
      } else {
        message = null;
      }
      return message;
    };
  };

  static validatePassword(minChar) {
    let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/;
    return function (control: FormControl) {
      const password = control.value;

      let message;
      if (!password) {
        message = { 'message': "This field is required" };
      } else if (password && password.length < minChar) {
        message = { 'message': `Minimum ${minChar} needed`  };
      } else if (!regex.test(password)) {
        message = { 'message': "Needs a combination of capital & small letters, numbers and special Chars" };
      } else {
        message = null;
      }
      return message;
    };
  };

  static validateEmail() {
    return function (c:FormControl){
      const value = c.value ? c.value.toString().trim() : c.value;
      let message =null;
      if (!value || value.length <= 0) {
        message = { 'message':  "This field is required"};
      } else {
        if(!ValidatorsService.emailRegex.test(value)){
          message = { 'message': "Not a valid email Id" };
        } else{
          message = null;
        }  
      }
      return message;
    }
    
  }

  
}
