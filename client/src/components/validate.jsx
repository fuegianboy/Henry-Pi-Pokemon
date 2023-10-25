const validate = (input) => {
    let errors = {};
    let regexURL = /^(http|https):\/\/[^\s]+(\.jpg|\.jpeg|\.png|\.gif)$/;


    if (!input.name) {
      errors.name = "A name is required";
    }
    if (input.name.length > 20) {
      errors.name = "Must be less than 20 characters";
    }
  
    if (!regexURL.test(input.image)) errors.image = "Enter a valid URL";
    if (!input.image) errors.image = "Image field cannot be empty";

  
    if (!input.life) {
      errors.life = "Can not be empty";
    }
    if (input.life <= 0  ) {
      errors.life = "Can not be less than 0";
    }
    if (input.life > 100  ) {
      errors.life = "Can not be more than 100";
    }


    if (input.attack === "") {
      errors.attack = "Can not be empty";
    }
    if (input.attack <= 0) {
      errors.attack = "Can not be less than 0";
    }

    if (input.attack > 100  ) {
      errors.attack = "Can not be more than 100";
    }


    if (input.defense === "") {
      errors.defense = "Can not be empty";
    }
    if (input.defense <= 0) {
      errors.defense = "Can not be less than 0";
    }
    if (input.defense > 100  ) {
      errors.defense = "Can not be more than 100";
    }



    if (input.speed < 0) {
      errors.speed = "Can not be less than 0";
    }
    if (input.speed > 100  ) {
      errors.speed = "Can not be more than 100";
    }
  

    if (input.height < 0) {
      errors.height = "Can not be less than 0";
    }
    if (input.height > 100  ) {
      errors.height = "Can not be more than 100";
    }
  

    if (input.weight < 0) {
      errors.weight = "Can not be less than 0";
    }
    if (input.weight > 100  ) {
      errors.weight = "Can not be more than 100";
    }
  
    if (input.types.length <= 0) {
      errors.types = "You must choose at least 2 types";
    }
    if (input.types.length >= 3) errors.types = "Cannot choose more than 2 types";
  
    if (!errors.types) errors.types = [];
    return errors;
};

export default validate;
