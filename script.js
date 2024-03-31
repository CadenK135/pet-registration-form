function validateForm() {
  const form = document.forms['pet-info-form'];
  // TODO: Add checks here.
  
    const bordetellaChecked = form['bordetella'].checked;
    const dhlppChecked = form['dhlpp'].checked;
    const rabiesChecked = form['rabies'].checked;
  
    const otherInfo = form['other-info-text-area'].value.trim();
    console.log(bordetellaChecked, dhlppChecked, rabiesChecked, otherInfo)
    if (!bordetellaChecked || !dhlppChecked || !rabiesChecked) {
      if (otherInfo === '') {
        alert('Please specify why all vaccinations are not selected in the text area below.');
        return false; 
      }
    }
  
    return true;
  }


