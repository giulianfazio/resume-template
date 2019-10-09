import { resume } from '../../assets/jsonResume';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-candidate-contacts',
  templateUrl: './candidate-contacts.component.html',
  styleUrls: ['./candidate-contacts.component.scss']
})
export class CandidateContactsComponent implements OnInit {
  contacts = []

  constructor() {
    this.addAddressToContacs(this.contacts, resume);
    this.addEmailToContacts(this.contacts, resume);
    this.addPhoneNumberToContacts(this.contacts, resume);
    this.addWebsiteToContacts(this.contacts, resume);
    this.addProfilesToContact(this.contacts, resume);
  }

  addEmailToContacts(contacts, jsonResume) {
    let email = jsonResume.basics.email;
    if (!!email) {
        contacts.push({
          key: 'email',
          styleClass: 'fa fa-envelope',
          value: email,
        });
    }
  }

  addPhoneNumberToContacts(contacts, jsonResume) {
    let phone = jsonResume.basics.phone;
    if (!!phone) {
        contacts.push({
          key: 'phone',
          styleClass: 'fa fa-phone',
          value: phone,
        });
    }
  }

  addWebsiteToContacts(contacts, jsonResume) {
    let website = jsonResume.basics.website;
    if (!!website) {
        contacts.push({
          key: 'website',
          styleClass: 'fa fa-globe-americas',
          value: website,
        });
    }
  }

  addProfilesToContact(contacts, jsonResume) {
    let profiles = jsonResume.basics.profiles;
    if (!!profiles) {
      profiles.forEach(profile => {
        let profileIconClass = this.getIconClassForNetwork(profile.network);
        if (!!profileIconClass) {
          contacts.push({
            key: profile.network,
            styleClass: profileIconClass,
            value: profile.url || profile.username,
          });
        }
      });
    }
  }

  getIconClassForNetwork(networkName) {
    let networkIconMappingDic = {
      Linkedin: 'fab fa-linkedin',
      GitHub: 'fab fa-github',
    };
    let icon = networkIconMappingDic[networkName];
    return icon;
  }

  addAddressToContacs(contacts, jsonResume) {
    let loc = jsonResume.basics.location;
    if (loc) {
      let locationParams = ['address', 'postalCode', 'city', 'region', 'countryCode'];
      let strWrapper = { str: ''};
      locationParams.forEach( locParam => {
        this.stringCatIfPossible(strWrapper, loc[locParam], ', ')
      });
      let addressString = strWrapper.str;
      if (addressString !== '') {
        contacts.push({
          key: 'address',
          styleClass: 'fa fa-map-marker-alt',
          value: addressString
        });
      }
    }
  }

  stringCatIfPossible(strWrapper, toAppend, separator) {
    if (toAppend && toAppend !== '') {
      if (separator && strWrapper.str !== '') {
        strWrapper.str += separator;
      }
      strWrapper.str += toAppend;
    }
  }

  ngOnInit() {
  }

}
