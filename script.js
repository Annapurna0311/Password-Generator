class PasswordGenerator {
  constructor() {
      this.uppercaseCheckbox = document.getElementById('uppercaseCheckbox');
      this.lowercaseCheckbox = document.getElementById('lowercaseCheckbox');
      this.numberCheckbox = document.getElementById('numberCheckbox');
      this.specialCheckbox = document.getElementById('specialCheckbox');
      this.passwordField = document.getElementById('passwordField');
      this.generateBtn = document.getElementById('generateBtn');
      this.copyBtn = document.getElementById('copyBtn');

      this.generateBtn.addEventListener('click', this.generatePassword.bind(this));
      this.copyBtn.addEventListener('click', this.copyPassword.bind(this));
  }

  generatePassword() {
      const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
      const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
      const numberChars = '0123456789';
      const specialChars = '!@#$%^&*()-_=+';
      let chars = '';
      let newPassword = '';

      if (this.uppercaseCheckbox.checked) {
          chars += uppercaseChars;
      }
      if (this.lowercaseCheckbox.checked) {
          chars += lowercaseChars;
      }
      if (this.numberCheckbox.checked) {
          chars += numberChars;
      }
      if (this.specialCheckbox.checked) {
          chars += specialChars;
      }

      if (chars === '') {
          alert('Please select at least one option.');
          return;
      }

      for (let i = 0; i < 12; i++) {
          newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      this.passwordField.value = newPassword;
  }

  copyPassword() {
      this.passwordField.select();
      document.execCommand('copy');
      alert('Password copied to clipboard!');
  }
}

const passwordGenerator = new PasswordGenerator();
