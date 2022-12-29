
var contacts = [
    {
        "id": 1,
        "firstName": "Ryan",
        "middleName": "Jia-Ming",
        "lastName": "Wong",
        "lastPhoneIdUsed": 2,
        "phones": [
            {
                "id": 1,
                "countryCode": 1,
                "type": "Mobile",
                "phone": "9096558447"
            },
            {
                "id": 2,
                "countryCode": 1,
                "type": "Home",
                "phone": "9096124511"
            }
        ],
        "streetAddress": "1",
        "city": "Diamond Bar",
        "state": "CA",
        "zipcode": "91765",
        "lastEmailIdUsed": 1,
        "emails": [
            {
                "id": 1,
                "type": "Personal",
                "email": "ryanjwong007@gmail.com"
            }
        ],
        "image": "images/ryan.png"
    },

    {
        "id": 2,
        "firstName": "Lily",
        "middleName": "Tilly",
        "lastName": "Wong",
        "lastPhoneIdUsed": 2,
        "phones": [
            {
                "id": 1,
                "countryCode": 1,
                "type": "Mobile",
                "phone": "9096558447"
            },
            {
                "id": 2,
                "countryCode": 1,
                "type": "Home",
                "phone": "9096124511"
            }
        ],
        "streetAddress": "1",
        "city": "Diamond Bar",
        "state": "CA",
        "zipcode": "91765",
        "lastEmailIdUsed": 1,
        "emails": [
            {
                "id": 1,
                "type": "Personal",
                "email": "lilywong007@gmail.com"
            }
        ],
        "image": "images/dog-icon.png"
    },

    {
        "id": 3,
        "firstName": "Dylan",
        "middleName": "",
        "lastName": "Wong",
        "lastPhoneIdUsed": 2,
        "phones": [
            {
                "id": 1,
                "countryCode": 1,
                "type": "Mobile",
                "phone": "9096558441"
            },
            {
                "id": 2,
                "countryCode": 1,
                "type": "Home",
                "phone": "9096124511"
            }
        ],
        "streetAddress": "1",
        "city": "Diamond Bar",
        "state": "CA",
        "zipcode": "91765",
        "lastEmailIdUsed": 1,
        "emails": [
            {
                "id": 1,
                "type": "Personal",
                "email": "dylanwong007@gmail.com"
            }
        ],
        "image": "images/user.png"
    }
   
  
];

var baseColors = {
    "id":                         0,
    "name":                       "Base Colors",
    "type":                       "Base Color Theme",
    "leftBackground":             "--flex-left-background-color",
    "rightBackground":            "--flex-right-background-color",
    "leftScrollBar":              "--flex-left-scroll-bar-background-color",
    "rightScrollBar":             "--flex-right-scroll-bar-background-color",
    "leftScrollBarHover":         "--flex-left-scroll-bar-hover-color",
    "rightScrollBarHover":        "--flex-right-scroll-bar-hover-color",
    "buttonBackground":           "--button-background-color",
    "buttonBackgroundGradient":   "--button-background-gradient-color",
    "buttonBorderColor":          "--button-border-color",
    "contactColor":               "--contact-color",
    "contactHoverColor":          "--contact-hover-color",
    "contactIconColor":           "--contact-icon-color",
    "contactDisabledColor":       "--contact-disabled-color"  
};

var phoneTypes = [
    {
        "id": 1,
        "type" : "Mobile"

    },
    {
        "id": 2,
        "type" : "Work"
    },
    {
        "id": 3,
        "type": "Home"
    },
    {
        "id": 4,
        "type": "Other"
    }
];

var states = [
    {
        "id":       1,
        "abrev":    "AL",
        "name":     "ALABAMA"   
    },
    {
        "id":       2,
        "abrev":    "AK",
        "name":     "ALASKA"
    },
    {
        "id":       3,
        "abrev":    "AS",
        "name":     "AMERICAN SAMOA"
    },
    {
        "id":       4,
        "abrev":    "AZ",
        "name":     "ARIZONA"
    },
    {
        "id":       5,
        "abrev":    "AR",
        "name":     "ARKANSAS"
    },
    {
        "id":       6,
        "abrev":    "CA",
        "name":     "CALIFORNIA"
    },
    {
        "id":       7,
        "abrev":    "CO",
        "name":     "COLORADO"
    },
    {
        "id":       8,
        "abrev":    "CT",
        "name":     "CONNECTICUT"
    },
    {
        "id":       9,
        "abrev":    "DE",
        "name":     "DELAWARE"
    },
    {
        "id":       10,
        "abrev":    "DC",
        "name":     "DISTRICT OF COLUMBIA"
    },
    {
        "id":       11,
        "abrev":    "FL",
        "name":     "FLORIDA"
    },
    {
        "id":       12,
        "abrev":    "GA",
        "name":     "GEORGIA"
    },
    {
        "id":       13,
        "abrev":    "GU",
        "name":     "GUAM"
    },
    {
        "id":       14,
        "abrev":    "HI",
        "name":     "HAWAII"
    },
    {
        "id":       15,
        "abrev":    "ID",
        "name":     "IDAHO"
    },
    {
        "id":       16,
        "abrev":    "IL",
        "name":     "ILLINOIS"
    },
    {
        "id":       17,
        "abrev":    "IN",
        "name":     "INDIANA"
    },
    {
        "id":       18,
        "abrev":    "IA",
        "name":     "IOWA"
    },
    {
        "id":       19,
        "abrev":    "KS",
        "name":     "KANSAS"
    },
    {
        "id":       20,
        "abrev":    "KY",
        "name":     "KENTUCKY"
    },
    {
        "id":       21,
        "abrev":    "LA",
        "name":     "LOUISIANA"
    },
    {
        "id":       22,
        "abrev":    "ME",
        "name":     "MAINE"
    },
    {
        "id":       23,
        "abrev":    "MD",
        "name":     "MARYLAND"
    },
    {
        "id":       24,
        "abrev":    "MA",
        "name":     "MASSACHUSETTS"
    },
    {
        "id":       25,
        "abrev":    "MI",
        "name":     "MICHIGAN"
    },
    {
        "id":       26,
        "abrev":    "MN",
        "name":     "MINNESOTA"
    },
    {
        "id":       27,
        "abrev":    "MS",
        "name":     "MISSISSIPPI"
    },
    {
        "id":       28,
        "abrev":    "MO",
        "name":     "MISSOURI"
    },
    {   "id":       29,
        "abrev":    "MT",
        "name":     "MONTANA"
    },
    {
        "id":       30,
        "abrev":    "NE",
        "name":     "NEBRASKA"
    },
    {
        "id":       31,
        "abrev":    "NV",
        "name":     "NEVADA"
    },
    {
        "id":       32,
        "abrev":    "NH",
        "name":     "NEW HAMPSHIRE"
    },
    {
        "id":       33,
        "abrev":    "NJ",
        "name":     "NEW JERSEY"
    },
    {
        "id":       34,
        "abrev":    "NM",
        "name":     "NEW MEXICO"
    },
    {
        "id":       35,
        "abrev":    "NY",
        "name":     "NEW YORK"
    },
    {
        "id":       36,
        "abrev":    "NC",
        "name":     "NORTH CAROLINA"
    },
    {
        "id":       37,
        "abrev":    "ND",
        "name":     "NORTH DAKOTA"
    },
    {
        "id":       38,
        "abrev":    "MP",
        "name":     "NORTHERN MARIANA IS"
    },
    {
        "id":       39,
        "abrev":    "OH",
        "name":     "OHIO"
    },
    {
        "id":       40,
        "abrev":    "OK",
        "name":     "OKLAHOMA"
    },
    {
        "id":       41,
        "abrev":    "OR",
        "name":     "OREGON"
    },
    {
        "id":       42,
        "abrev":    "PA",
        "name":     "PENNSYLVANIA"
    },
    {
        "id":       43,
        "abrev":    "PR",
        "name":     "PUERTO RICO"
    },
    {
        "id":       44,
        "abrev":    "RI",
        "name":     "RHODE ISLAND"
    },
    {
        "id":       45,
        "abrev":    "SC",
        "name":     "SOUTH CAROLINA"
    },
    {
        "id":       46,
        "abrev":    "SD",
        "name":     "SOUTH DAKOTA"
    },
    {
        "id":       47,
        "abrev":    "TN",
        "name":     "TENNESSEE"
    },
    {
        "id":       48,
        "abrev":    "TX",
        "name":     "TEXAS"
    },
    {
        "id":       49,
        "abrev":    "UT",
        "name":     "UTAH"
    },
    {
        "id":       50,
        "abrev":    "VT",
        "name":     "VERMONT"
    },
    {
        "id":       51,
        "abrev":    "VA",
        "name":     "VIRGINIA"
    },
    {
        "id":       52,
        "abrev":    "VI",
        "name":     "VIRGIN ISLANDS"
    },
    {
        "id":       53,
        "abrev":    "WA",
        "name":     "WASHINGTON"
    },
    {
        "id":       54,
        "abrev":    "WV",
        "name":     "WEST VIRGINIA"
    },
    {
        "id":       55,
        "abrev":    "WI",
        "name":     "WISCONSIN"
    },
    {
        "id":       56,
        "abrev":    "WY",
        "name":     "WYOMING"
    }
];
//  window. onload” will execute code when browser has loaded the DOM tree and all other resources like images, 
//objects, etc. onDocumentReady executes when the DOM tree is built, without waiting for other resources to load. ... 
//.onload is not cross-browser compatible while using something like jQuery's document
$(document).ready(function() {

    displayContactList();

    $(".contact-button").click(function() {
        // Pass the reference to bthe button clicked
        displayContact(this);
    });

    $('.theme-dropdown').dropdown({
        onChange: function(id) {
            // Color menu theme id
            setColorTheme(id);
        }
    });

    $(".edit-button").click(function() {
        editContact(this.id);
    });

    $(".save-button").click(function() {
        saveContact(this.id);
    });
});


function displayContactList(){

    var previousListRemoved = false;

    // Remove any previous contact list 
    // Must reestabish the flex left event handler AFTER the flex container is finished
    if (document.contains(document.getElementById("flex-left"))) {
        document.getElementById("flex-left").remove();
        previousListRemoved = truncateSync;
    }

    var root = document.getElementById("root");

    var flexLeft = document.createElement("div"); 
    flexLeft.setAttribute("id", "flex-left");
    flexLeft.setAttribute("class", "flex-left");
    root.appendChild(flexLeft);

    var flexRight = null;
    if (document.contains(document.getElementById("flex-right"))) {
        var flexChildren = $("#flex-right").detach();
        if (flexChildren.length > 0) {
            flexRight = flexChildren[0];
        }
    }
    else {
        var flexRight = document.createElement("div"); 
        flexRight.setAttribute("class", "flex-right");
        flexRight.setAttribute("id", "flex-right");
        root.appendChild(flexRight);
    }

    

    var buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id", "button-container");
    buttonContainer.setAttribute("class", "button-container");
    flexLeft.appendChild(buttonContainer);

    var themeDropdown = buildThemes();
    buttonContainer.appendChild(themeDropdown);


    var addButton = document.createElement("button");
    addButton.setAttribute("id", "add-button");
    addButton.setAttribute("class", "add-button");
    addButton.textContent = "Add";
    buttonContainer.appendChild(addButton);
    //var contactList = document.getElementById("contact-list");

    //var contactList = document.createElement("div");
    //contactList.setAttribute("class", "contact-list");
    //flexLeft.appendChild(contactList);

    contacts.forEach(contact => {
        // Each button must be inside a div container for the buttom to behave correctly as a flex item
        var contactContainer = document.createElement("div");
        contactContainer.setAttribute("id", "contact-container");
        contactContainer.setAttribute("class", "contact-container");
        contactContainer.setAttribute("name", "contact-container");
        contactContainer.setAttribute("data-contact-id", contact.id);
        var contactButton = document.createElement("button");
        contactButton.setAttribute("id", "contact-button");
        contactButton.setAttribute("class", "contact-button");
        contactButton.setAttribute("data-contact-id", contact.id)

        var contactImage = document.createElement("img");
        contactImage.setAttribute("class", "contact-image");
        contactImage.setAttribute("id", "contact-image");
        contactImage.setAttribute("data-contact-id", contact.id);
        contactImage.setAttribute("src", contact.image);
        contactImage.setAttribute("alt", contact.firstName + " " + contact.middleName + " " + contact.lastName);

        /*
            use <p> tag to force long text to wrap around itself rather than the image
        */
       // TO seperate button text from button image
        var buttonText = document.createElement("p");
        buttonText.setAttribute("class", "contact-text");
        buttonText.setAttribute("id", "contact-text");
        buttonText.setAttribute("name", "contact-text");
        buttonText.setAttribute("data-contact-id", contact.id);
        buttonText.textContent =contact.firstName + " " + contact.middleName + " " + contact.lastName;

      


        // Embed the button image and button text in the button to display them side-by-side
        contactButton.appendChild(contactImage);
        contactButton.appendChild(buttonText);

        contactContainer.appendChild(contactButton);
        flexLeft.appendChild(contactContainer);
    });
    if (previousListRemoved) {
        $(".contact-button").click(function() {
            displayContact(this);
        });
    }
}

function displayContact(contactButton){
    var contactId = contactButton.getAttribute("data-contact-id");
    var contact = contacts[parseInt(contactId) - 1];
    var flexRight = document.getElementById("flex-right");

    if (flexRight.childNodes.length > 0) {
        $(flexRight).empty();
    }

    var buttonContainer = document.createElement("div");
    buttonContainer.setAttribute("id", "button-container");
    buttonContainer.setAttribute("class", "button-container");
    flexRight.appendChild(buttonContainer);

    var editButton = document.createElement("button");
    editButton.setAttribute("type", "button");
    editButton.setAttribute("id", "edit-button");
    editButton.setAttribute("class", "edit-button");
    editButton.setAttribute("name", "edit-button");
    editButton.setAttribute("data-contact-id", contact.id);

    editButton.textContent = "Edit";
    var addButton = document.getElementById("add-button");
    editButton.style.width = addButton.style.width;
    buttonContainer.appendChild(editButton);

 
    var saveButton = document.createElement("button");
    saveButton.type = "submit";
    saveButton.setAttribute("form", "contact-form");
    saveButton.setAttribute("id", "save-button");
    saveButton.setAttribute("class", "save-button");
    saveButton.setAttribute("name", "save-button");
    // Custom attribute used to track the id of the contact displayed
    saveButton.setAttribute("data-contact-id", contact.id);
    saveButton.value = "Save";
    $(saveButton).hide();

    // Must add unit (px)
    saveButton.style.width = addButton.offsetWidth + "px";
    buttonContainer.appendChild(saveButton);

    // Contact Form

    
    var contactForm = document.createElement("form");
    contactForm.setAttribute("autocomplete", "off");
    contactForm.method = "post";
    contactForm.action = "#";
    contactForm.setAttribute("id", "contact-form");
    contactForm.setAttribute("class", "contact-form");
    contactForm.setAttribute("name", "contact-form");
    contactForm.setAttribute("data-contact-id", contactId);
    flexRight.appendChild(contactForm);

    

    // Name
    var firstNameRow = document.createElement("div");
    firstNameRow.setAttribute("class", "contact-row");
    contactForm.appendChild(firstNameRow);

    var firstNameIconCol = document.createElement("div");
    firstNameIconCol.setAttribute("class", "contact-icon-col");

    var firstNameIcon = document.createElement("span");
    // Using class fa-fw (fixed-sized fonts)
    firstNameIcon.setAttribute("class", "icon single fas fa-user fa-fw");
    firstNameIconCol.appendChild(firstNameIcon);
    firstNameRow.appendChild(firstNameIconCol);

    var firstNameFieldSet = document.createElement("fieldset");
    firstNameFieldSet.setAttribute("class", "contact-col");
    var firstNameLegend = document.createElement("legend");
    firstNameLegend.textContent = "First Name *";
    firstNameLegend.title = "* First Name or Last Name is required";
    firstNameFieldSet.appendChild(firstNameLegend);

    var firstNameInput = document.createElement("input");
    firstNameInput.type = "text";
    firstNameInput.setAttribute("id", "contact-first-name");

    firstNameInput.setAttribute("class", "contact-first-name");
    firstNameInput.setAttribute("name", "contact-first-name");
    firstNameInput.setAttribute("data-contact-id", contact.id);

    firstNameInput.setAttribute("data-required", true);


    firstNameInput.value = contact.firstName;
    firstNameInput.placeholder = "Your name ...";
    firstNameInput.title = firstNameLegend.title;
    firstNameFieldSet.appendChild(firstNameInput);

    var firstNameErrorMsg = document.createElement("span");
    firstNameErrorMsg.setAttribute("id", "first-name-error-msg");
    firstNameErrorMsg.setAttribute("class", "error-msg");
    firstNameErrorMsg.setAttribute("data-contact-id", contact.id);
    firstNameErrorMsg.textContent = firstNameInput.title;
    firstNameFieldSet.appendChild(firstNameErrorMsg);
    firstNameRow.appendChild(firstNameFieldSet);

    $(firstNameErrorMsg).hide();

    // Middle Name 
    var middleNameRow = document.createElement("div");
    middleNameRow.setAttribute("class", "contact-row");
    contactForm.appendChild(middleNameRow);

    var middleNameIconCol = document.createElement("div");
    middleNameIconCol.setAttribute("class", "contact-icon-col");

    var middleNameIcon = document.createElement("span");
    middleNameIcon.setAttribute("class", "blank-icon");
    middleNameIconCol.appendChild(middleNameIcon);
    middleNameRow.appendChild(middleNameIconCol);

    var middleNameFieldSet = document.createElement("fieldset");
    middleNameFieldSet.setAttribute("class", "contact-col");
    var middleNameLegend = document.createElement("legend");
    middleNameLegend.textContent = "Middle Name";
    middleNameLegend.title = "Middle name is optional";
    middleNameFieldSet.appendChild(middleNameLegend);

    var middleNameInput = document.createElement("input");
    middleNameInput.type = "text";
    middleNameInput.setAttribute("id", "contact-middle-name");
    middleNameInput.setAttribute("class", "contact-middle-name");
    middleNameInput.setAttribute("name", "contact-middle-name");

    middleNameInput.setAttribute("data-contact-id", contact.id);
    middleNameInput.setAttribute("data-required", false);
    middleNameInput.value = contact.middleName;
    middleNameInput.placeholder = "Middle name ...";
    middleNameFieldSet.appendChild(middleNameInput);
    

    var middleNameErrorMsg = document.createElement("span");
    middleNameErrorMsg.setAttribute("id", "middle-name-error-msg");
    middleNameErrorMsg.setAttribute("class", "error-msg");
    middleNameErrorMsg.setAttribute("data-contact-id", contact.id);
    middleNameErrorMsg.textContent = middleNameLegend.title;
    middleNameFieldSet.appendChild(middleNameErrorMsg);
    middleNameRow.appendChild(middleNameFieldSet);
    $(middleNameErrorMsg).hide();

    // Last Name 
    var lastNameRow = document.createElement("div");
    lastNameRow.setAttribute("class", "contact-row");
    contactForm.appendChild(lastNameRow);

    var lastNameIconCol = document.createElement("div");
    lastNameIconCol.setAttribute("class", "contact-icon-col");

    var lastNameIcon = document.createElement("span");
    lastNameIcon.setAttribute("class", "blank-icon");
    lastNameIconCol.appendChild(lastNameIcon);
    lastNameRow.appendChild(lastNameIconCol);

    var lastNameFieldSet = document.createElement("fieldset");
    lastNameFieldSet.setAttribute("class", "contact-col");
    var lastNameLegend = document.createElement("legend");
    lastNameLegend.title = "*First Name or Last Name is required";

    lastNameLegend.textContent = "Last Name *";
    lastNameFieldSet.appendChild(lastNameLegend);

    var lastNameInput = document.createElement("input");
    lastNameInput.type = "text";
    lastNameInput.setAttribute("id", "contact-last-name");
    lastNameInput.setAttribute("class", "contact-last-name");
    lastNameInput.setAttribute("name", "contact-last-name");
    lastNameInput.setAttribute("data-contact-id", contact.id);
    lastNameInput.setAttribute("data-required", true);

    lastNameInput.value = contact.lastName;
    lastNameInput.placeholder = "Last name ...";
    lastNameInput.title = "*First Name or Last Name is required";
    lastNameFieldSet.appendChild(lastNameInput);
    

    var lastNameErrorMsg = document.createElement("span");
    lastNameErrorMsg.setAttribute("id", "last-name-error-msg");
    lastNameErrorMsg.setAttribute("class", "error-msg");
    lastNameErrorMsg.setAttribute("data-contact-id", contact.id);
    lastNameErrorMsg.textContent = lastNameInput.title;
    lastNameFieldSet.appendChild(lastNameErrorMsg);
    lastNameRow.appendChild(lastNameFieldSet);

    $(lastNameErrorMsg).hide();

    contact.phones.forEach(element => {
        var phoneRow = document.createElement("div");
        phoneRow.setAttribute("data-phoneid", element.id);
        phoneRow.setAttribute("class", "contact-row phone-row");
        contactForm.appendChild(phoneRow);

        var phoneTypeIconCol = document.createElement("div");
        phoneTypeIconCol.setAttribute("class", "contact-icon-col");

        var phoneTypeIcon = document.createElement("span");
        phoneTypeIcon.setAttribute("class", "icon fas fa-phone-alt fa-fw");
        phoneTypeIconCol.appendChild(phoneTypeIcon);
        phoneRow.appendChild(phoneTypeIconCol);

        var phoneFieldSet = document.createElement("fieldSet");
        phoneFieldSet.setAttribute("class", "contact-col phone-fieldset");
        phoneFieldSet.setAttribute("data-phone-id", element.id);

        var phoneTypeDropdown = buildPhoneTypes();
        var phoneTypeIndex = getPhoneTypeIndex(element.type);
        phoneTypeDropdown.setAttribute("data-phone-type-id", phoneTypeIndex);
        $(phoneTypeDropdown).dropdown('set selected', phoneTypeIndex);
        $(phoneTypeDropdown).addClass("disabled");
        
        phoneFieldSet.appendChild(phoneTypeDropdown);

        var phoneTypeErrorMsg = document.createElement("span");
        $(phoneTypeErrorMsg).hide();
        phoneTypeErrorMsg.setAttribute("id", "phone-type-error-msg-" + element.id);
        phoneTypeErrorMsg.setAttribute("class", "error-msg");
        phoneTypeErrorMsg.textContent = "You must select a phone type.";
        phoneFieldSet.appendChild(phoneTypeErrorMsg);

        var phoneInput = document.createElement("input");
        phoneInput.tpye = "text";
        phoneInput.setAttribute("id", "phone-input-" + element.id);
        // Name attribute is used to keep track of the phone id dislayed
        phoneInput.setAttribute("name", element.id);
        phoneInput.value = element.phone;
        phoneInput.placeholder = "Your phone...";

        // $(phoneInput).inputmask('(999)-999-9999');

        phoneFieldSet.appendChild(phoneInput);

        var phoneErrorMsg = document.createElement("span");
        $(phoneErrorMsg).hide();
        phoneErrorMsg.setAttribute("id", "phone-error-msg-" + element.id);
        phoneErrorMsg.setAttribute("class", "error-msg");
        phoneErrorMsg.textContent = "US phone numbers are 10 digits.";
        phoneFieldSet.appendChild(phoneErrorMsg);

        phoneRow.appendChild(phoneFieldSet);

        var phoneDeleteButton = document.createElement("button");
        phoneDeleteButton.setAttribute("id", "delete-phone-button-" + element.id);
        phoneDeleteButton.setAttribute("class", "contact-delete-icon-col delete phone-button");
        // Name attribute is used to keep track of the phone id dislayed
        phoneDeleteButton.setAttribute("name", element.id);

        var phoneDeleteIcon = document.createElement("span");
        phoneDeleteIcon.setAttribute("class", "icon fas fa-trash-alt fa-fw");
        phoneDeleteButton.appendChild(phoneDeleteIcon);

        phoneRow.appendChild(phoneDeleteButton);
    });
    var phoneRow = document.createElement("div");
    phoneRow.setAttribute("id", "phone-row-0");
    phoneRow.setAttribute("class", "contact-row");
    contactForm.appendChild(phoneRow);

    var phoneTypeIconCol = document.createElement("div");
    phoneTypeIconCol.setAttribute("class", "contact-icon-col");

    var phoneTypeIcon = document.createElement("span");
    phoneTypeIcon.setAttribute("class", "icon fas fa-phone-alt fa-fw");
    phoneTypeIconCol.appendChild(phoneTypeIcon);
    phoneRow.appendChild(phoneTypeIconCol);

    var phoneFieldSet = document.createElement("fieldSet");
    phoneFieldSet.setAttribute("id", "phone-fieldset-0");
    phoneFieldSet.setAttribute("class", "contact-col phone-fieldset");
    phoneFieldSet.setAttribute("name", "0");

    var phoneSelect = buildPhoneTypes();
    phoneSelect.setAttribute("id", "phone-select-0");
    phoneSelect.setAttribute("name", "0");
    phoneFieldSet.appendChild(phoneSelect);

    var phoneTypeErrorMsg = document.createElement("span");
    $(phoneTypeErrorMsg).hide();
    phoneTypeErrorMsg.setAttribute("id", "phone-type-error-msg-0");
    phoneTypeErrorMsg.setAttribute("class", "error-msg");
    phoneTypeErrorMsg.textContent = "You must select a phone type.";
    phoneFieldSet.appendChild(phoneTypeErrorMsg);

    var phoneInput = document.createElement("input");
    phoneInput.tpye = "text";
    phoneInput.setAttribute("id", "phone-input-0");
    phoneInput.setAttribute("name", "0");
    phoneInput.placeholder = "Your phone...";

    $(phoneInput).inputmask('(999)-999-9999');

    phoneFieldSet.appendChild(phoneInput);

    var phoneErrorMsg = document.createElement("span");
    $(phoneErrorMsg).hide();
    phoneErrorMsg.setAttribute("id", "phone-error-msg-0");
    phoneErrorMsg.setAttribute("class", "error-msg");
    phoneErrorMsg.textContent = "US phone numbers are 10 digits.";
    phoneFieldSet.appendChild(phoneErrorMsg);

    phoneRow.appendChild(phoneFieldSet);
    $("#contact-form :input").prop("disabled", true);

}

function editContact(contactId) {
}

function saveContact(contactId) {
}

function buildPhoneTypes() {
   // Them Dropdown
   var phoneTypeDropDown = document.createElement("div");
   phoneTypeDropDown.setAttribute("id", "theme-dropdown");
   phoneTypeDropDown.setAttribute("class", "ui selection dropdown phone-type-dropdown");

   var input = document.createElement("input");
   input.type = "hidden";
   input.setAttribute("name", "phone-type");
   phoneTypeDropDown.appendChild(input);

   var icon = document.createElement("i");
   icon.setAttribute("class", "dropdown icon");
   phoneTypeDropDown.appendChild(icon);

   var text = document.createElement("div");
   text.setAttribute("class", "default text");
   text.setAttribute("id", "phone-type-text");
   text.textContent = "Phone type...";
   phoneTypeDropDown.appendChild(text);

   


   var menu = document.createElement("div");
   menu.setAttribute("id", "menu");
   menu.setAttribute("class", "menu");
   phoneTypeDropDown.appendChild(menu);

   phoneTypes.forEach(element => {
       var item = document.createElement("div");
       item.setAttribute("id", element.id);
       item.setAttribute("class", "item");
       item.setAttribute("data-value", element.id);
       
       menu.appendChild(item);
   });

   
   // Initialize Semantic UI
   $('.phone-type-dropdown').dropdown('set selected', 1);

   return phoneTypeDropDown;
}



var colorThemes = [
    {
        "id":                         1,
        "name":                       "Theme 1",
        "type":                       "Split Complementary 1 Theme",
        "leftBackground":             "--split-complementary-1-flex-left-background-color",
        "rightBackground":            "--split-complementary-1-flex-right-background-color",
        "leftScrollBar":              "--split-complementary-1-flex-left-scroll-bar-background-color",
        "rightScrollBar":             "--split-complementary-1-flex-right-scroll-bar-background-color",
        "leftScrollBarHover":         "--split-complementary-1-flex-left-scroll-bar-hover-color",
        "rightScrollBarHover":        "--split-complementary-1-flex-right-scroll-bar-hover-color",
        "buttonBackground":           "--split-complementary-1-button-background-color",
        "buttonBackgroundGradient":   "--split-complementary-1-button-background-gradient-color",
        "buttonBorderColor":          "--split-complementary-1-button-border-color",
        "contactColor":               "--split-complementary-1-contact-color",
        "contactHoverColor":          "--split-complementary-1-contact-hover-color",
        "contactIconColor":           "--split-complementary-1-contact-icon-color",
        "contactDisabledColor":       "--split-complementary-1-contact-disabled-color"
    },
    {
        "id":                         2,
        "name":                       "Theme 2",
        "type":                       "Reverse Split Complementary 1 Theme",
        "leftBackground":             "--split-complementary-1-flex-right-background-color",
        "rightBackground":            "--split-complementary-1-flex-left-background-color",
        "leftScrollBar":              "--split-complementary-1-flex-left-scroll-bar-background-color",
        "rightScrollBar":             "--split-complementary-1-flex-right-scroll-bar-background-color",
        "leftScrollBarHover":         "--split-complementary-1-flex-left-scroll-bar-hover-color",
        "rightScrollBarHover":        "--split-complementary-1-flex-right-scroll-bar-hover-color",
        "buttonBackground":           "--split-complementary-1-button-background-color",
        "buttonBackgroundGradient":   "--split-complementary-1-button-background-gradient-color",
        "buttonBorderColor":          "--split-complementary-1-button-border-color",
        "contactColor":               "--split-complementary-1-contact-color",
        "contactHoverColor":          "--split-complementary-1-contact-hover-color",
        "contactIconColor":           "--split-complementary-1-contact-icon-color",
        "contactDisabledColor":       "--split-complementary-1-contact-disabled-color"
    },
    {
        "id":                         3,
        "name":                       "Theme 3",
        "type":                       "Analogous 1 Theme",
        "leftBackground":             "--analogous-1-flex-left-background-color",
        "rightBackground":            "--analogous-1-flex-right-background-color",
        "leftScrollBar":              "--analogous-1-flex-left-scroll-bar-background-color",
        "rightScrollBar":             "--analogous-1-flex-right-scroll-bar-background-color",
        "leftScrollBarHover":         "--analogous-1-flex-left-scroll-bar-hover-color",
        "rightScrollBarHover":        "--analogous-1-flex-right-scroll-bar-hover-color",
        "buttonBackground":           "--analogous-1-button-background-color",
        "buttonBackgroundGradient":   "--analogous-1-button-background-gradient-color",
        "buttonBorderColor":          "--analogous-1-button-border-color",
        "contactColor":               "--analogous-1-contact-color",
        "contactHoverColor":          "--analogous-1-contact-hover-color",
        "contactIconColor":           "--analogous-1-contact-icon-color",
        "contactDisabledColor":       "--analogous-1-contact-disabled-color"
    },
    {
        "id":                         4,
        "name":                       "Theme 4",
        "type":                       "Reverse Analogous 1 Theme",
        "leftBackground":             "--analogous-1-flex-right-background-color",
        "rightBackground":            "--analogous-1-flex-left-background-color",
        "leftScrollBar":              "--analogous-1-flex-left-scroll-bar-background-color",
        "rightScrollBar":             "--analogous-1-flex-right-scroll-bar-background-color",
        "leftScrollBarHover":         "--analogous-1-flex-left-scroll-bar-hover-color",
        "rightScrollBarHover":        "--analogous-1-flex-right-scroll-bar-hover-color",
        "buttonBackground":           "--analogous-1-button-background-color",
        "buttonBackgroundGradient":   "--analogous-1-button-background-gradient-color",
        "buttonBorderColor":          "--analogous-1-button-border-color",
        "contactColor":               "--analogous-1-contact-color",
        "contactHoverColor":          "--analogous-1-contact-hover-color",
        "contactIconColor":           "--analogous-1-contact-icon-color",
        "contactDisabledColor":       "--analogous-1-contact-disabled-color"
    },
    {
        "id":                         5,
        "name":                       "Theme 5",
        "type":                       "Triadic 1 Theme",
        "leftBackground":             "--triadic-1-flex-left-background-color",
        "rightBackground":            "--triadic-1-flex-right-background-color",
        "leftScrollBar":              "--triadic-1-flex-left-scroll-bar-background-color",
        "rightScrollBar":             "--triadic-1-flex-right-scroll-bar-background-color",
        "leftScrollBarHover":         "--triadic-1-flex-left-scroll-bar-hover-color",
        "rightScrollBarHover":        "--triadic-1-flex-right-scroll-bar-hover-color",
        "buttonBackground":           "--triadic-1-button-background-color",
        "buttonBackgroundGradient":   "--triadic-1-button-background-gradient-color",
        "buttonBorderColor":          "--triadic-1-button-border-color",
        "contactColor":               "--triadic-1-contact-color",
        "contactHoverColor":          "--triadic-1-contact-hover-color",
        "contactIconColor":           "--triadic-1-contact-icon-color",
        "contactDisabledColor":       "--triadic-1-contact-disabled-color"
    },
    {
        "id":                         6,
        "name":                       "Theme 6",
        "type":                       "Reverse Triadic 1 Theme",
        "leftBackground":             "--triadic-1-flex-right-background-color",
        "rightBackground":            "--triadic-1-flex-left-background-color",
        "leftScrollBar":              "--triadic-1-flex-left-scroll-bar-background-color",
        "rightScrollBar":             "--triadic-1-flex-right-scroll-bar-background-color",
        "leftScrollBarHover":         "--triadic-1-flex-left-scroll-bar-hover-color",
        "rightScrollBarHover":        "--triadic-1-flex-right-scroll-bar-hover-color",
        "buttonBackground":           "--triadic-1-button-background-color",
        "buttonBackgroundGradient":   "--triadic-1-button-background-gradient-color",
        "buttonBorderColor":          "--triadic-1-button-border-color",
        "contactColor":               "--triadic-1-contact-color",
        "contactHoverColor":          "--triadic-1-contact-hover-color",
        "contactIconColor":           "--triadic-1-contact-icon-color",
        "contactDisabledColor":       "--triadic-1-contact-disabled-color"
    }
];

function buildThemes() {
    // Them Dropdown
    var themeDropdown = document.createElement("div");
    themeDropdown.setAttribute("id", "theme-dropdown");
    themeDropdown.setAttribute("class", "ui selection dropdown theme-dropdown");

    var input = document.createElement("input");
    input.type = "hidden";
    input.setAttribute("name", "theme");
    themeDropdown.appendChild(input);

    var icon = document.createElement("i");
    icon.setAttribute("class", "dropdown icon");
    themeDropdown.appendChild(icon);

    var text = document.createElement("div");
    text.setAttribute("class", "default text");
    text.setAttribute("id", "theme-text");
    text.textContent = "Theme";
    themeDropdown.appendChild(text);

    


    var menu = document.createElement("div");
    menu.setAttribute("id", "menu");
    menu.setAttribute("class", "menu");
    themeDropdown.appendChild(menu);

    colorThemes.forEach(element => {
        var item = document.createElement("div");
        item.setAttribute("id", element.id);
        item.setAttribute("class", "item");
        item.setAttribute("data-value", element.id);
        
        var colors = document.createElement("div");
        colors.setAttribute("id", element.id);
        colors.setAttribute("class", "theme-color-container");
        colors.setAttribute("data-value", element.id);
        item.appendChild(colors);
       
        var leftColor = document.createElement("div");
        leftColor.setAttribute("class", "theme-color");
        leftColor.setAttribute("id", "theme-color-left");
        leftColor.setAttribute("data-color-id", element.id)

        leftColor.style.background = getComputedStyle(document.documentElement).getPropertyValue(element.leftBackground);
        colors.appendChild(leftColor);

        //iconLeft.setAttribute("class", "ui empty square label");
        
        var rightColor = document.createElement("div");
        rightColor.setAttribute("class", "theme-color");
        rightColor.setAttribute("id", "theme-color-right");
        rightColor.setAttribute("data-color-id", element.id)
        rightColor.style.background = getComputedStyle(document.documentElement).getPropertyValue(element.rightBackground);

        //iconRight.setAttribute("class", "ui empty square label");

      
        colors.appendChild(rightColor);

        menu.appendChild(item);
    });

    
    // Initialize Semantic UI
    $('.theme-dropdown').dropdown('set selected', 1);

    return themeDropdown;
}

function getPhoneTypeIndex(phoneType) {
    var phoneTypeIndex = 0;
    phoneTypes.forEach(element=> {
        if (element.type == phoneType) {
            phoneTypeIndex = element.id;
        }
    }); 

    return phoneTypeIndex;
}

function setColorTheme(id) {
    // Color Menu Item id
    var themeId = parseInt(id);
    var theme = colorThemes[themeId - 1];

    var root = document.documentElement;

    

    root.style.setProperty(baseColors.leftBackground, getComputedStyle(document.documentElement).getPropertyValue(theme.leftBackground));
    root.style.setProperty(baseColors.rightBackground, getComputedStyle(document.documentElement).getPropertyValue(theme.rightBackground));
    root.style.setProperty(baseColors.leftScrollBar, getComputedStyle(document.documentElement).getPropertyValue(theme.leftScrollBar));
    root.style.setProperty(baseColors.rightScrollBar, getComputedStyle(document.documentElement).getPropertyValue(theme.rightScrollBar));
    root.style.setProperty(baseColors.leftScrollBarHover, getComputedStyle(document.documentElement).getPropertyValue(theme.leftScrollBarHover));
    root.style.setProperty(baseColors.rightScrollBarHover, getComputedStyle(document.documentElement).getPropertyValue(theme.rightScrollBarHover));
    root.style.setProperty(baseColors.buttonBackground, getComputedStyle(document.documentElement).getPropertyValue(theme.buttonBackground));
    root.style.setProperty(baseColors.buttonBackgroundGradient, getComputedStyle(document.documentElement).getPropertyValue(theme.buttonBackgroundGradient));
    root.style.setProperty(baseColors.buttonBorderColor, getComputedStyle(document.documentElement).getPropertyValue(theme.buttonBorderColor));
    root.style.setProperty(baseColors.contactColor, getComputedStyle(document.documentElement).getPropertyValue(theme.contactColor));
    root.style.setProperty(baseColors.contactDisabledColor, getComputedStyle(document.documentElement).getPropertyValue(theme.contactDisabledColor));
    root.style.setProperty(baseColors.contactHoverColor, getComputedStyle(document.documentElement).getPropertyValue(theme.contactHoverColor));
    root.style.setProperty(baseColors.contactIconColor, getComputedStyle(document.documentElement).getPropertyValue(theme.contactIconColor));


}

