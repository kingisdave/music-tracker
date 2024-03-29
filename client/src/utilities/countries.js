// All simple ISO 3166 country data
// Sorted alphabetical by country name with
// the codes as the beginning (special characters on bottom)
const countries = [
  {abbr: "AF", name: "Afghanistan", mobilecode: "+93"},
  {abbr: "AX", name: "Åland Islands", mobilecode: "+358-18"},
  {abbr: "AL", name: "Albania", mobilecode: "+355"},
  {abbr: "DZ", name: "Algeria", mobilecode: "+213"},
  {abbr: "AS", name: "American Samoa", mobilecode: "+1-684"},
  {abbr: "AD", name: "Andorra", mobilecode: "+376"},
  {abbr: "AO", name: "Angola", mobilecode: "+244"},
  {abbr: "AI", name: "Anguilla", mobilecode: "+1-264"},
  {abbr: "AQ", name: "Antarctica", mobilecode: "+"},
  {abbr: "AG", name: "Antigua and Barbuda", mobilecode: "+1-268"},
  {abbr: "AR", name: "Argentina", mobilecode: "+54"},
  {abbr: "AM", name: "Armenia", mobilecode: "+374"},
  {abbr: "AW", name: "Aruba", mobilecode: "+297"},
  {abbr: "AU", name: "Australia", mobilecode: "+61"},
  {abbr: "AT", name: "Austria", mobilecode: "+43"},
  {abbr: "AZ", name: "Azerbaijan", mobilecode: "+994"},
  {abbr: "BS", name: "Bahamas, The", mobilecode: "+1-242"},
  {abbr: "BH", name: "Bahrain", mobilecode: "+973"},
  {abbr: "BD", name: "Bangladesh", mobilecode: "+880"},
  {abbr: "BB", name: "Barbados", mobilecode: "+1-246"},
  {abbr: "BY", name: "Belarus", mobilecode: "+375"},
  {abbr: "BE", name: "Belgium", mobilecode: "+32"},
  {abbr: "BZ", name: "Belize", mobilecode: "+501"},
  {abbr: "BJ", name: "Benin", mobilecode: "+229"},
  {abbr: "BM", name: "Bermuda", mobilecode: "+1-441"},
  {abbr: "BT", name: "Bhutan", mobilecode: "+975"},
  {abbr: "VE", name: "Bolivarian Republic of Venezuela", mobilecode: "+58"},
  {abbr: "BO", name: "Bolivia", mobilecode: "+591"},
  {abbr: "BQ", name: "Bonaire, Sint Eustatius and Saba", mobilecode: "+599"},
  {abbr: "BA", name: "Bosnia and Herzegovina", mobilecode: "+387"},
  {abbr: "BW", name: "Botswana", mobilecode: "+267"},
  {abbr: "BV", name: "Bouvet Island", mobilecode: "+"},
  {abbr: "BR", name: "Brazil", mobilecode: "+55"},
  {abbr: "IO", name: "British Indian Ocean Territory", mobilecode: "+246"},
  {abbr: "BN", name: "Brunei", mobilecode: "+673"},
  {abbr: "BG", name: "Bulgaria", mobilecode: "+359"},
  {abbr: "BF", name: "Burkina Faso", mobilecode: "+226"},
  {abbr: "BI", name: "Burundi", mobilecode: "+257"},
  {abbr: "CV", name: "Cabo Verde", mobilecode: "+238"},
  {abbr: "KH", name: "Cambodia", mobilecode: "+855"},
  {abbr: "CM", name: "Cameroon", mobilecode: "+237"},
  {abbr: "CA", name: "Canada", mobilecode: "+1"},
  {abbr: "KY", name: "Cayman Islands", mobilecode: "+1-345"},
  {abbr: "CF", name: "Central African Republic", mobilecode: "+236"},
  {abbr: "TD", name: "Chad", mobilecode: "+235"},
  {abbr: "CL", name: "Chile", mobilecode: "+56"},
  {abbr: "CN", name: "China", mobilecode: "+86"},
  {abbr: "CX", name: "Christmas Island", mobilecode: "+61"},
  {abbr: "CC", name: "Cocos (Keeling) Islands", mobilecode: "+61"},
  {abbr: "CO", name: "Colombia", mobilecode: "+57"},
  {abbr: "KM", name: "Comoros", mobilecode: "+269"},
  {abbr: "CG", name: "Congo", mobilecode: "+242"},
  {abbr: "CD", name: "Congo (DRC)", mobilecode: "+243"},
  {abbr: "CK", name: "Cook Islands", mobilecode: "+682"},
  {abbr: "CR", name: "Costa Rica", mobilecode: "+506"},
  {abbr: "CI", name: "Côte d'Ivoire", mobilecode: "+225"},
  {abbr: "HR", name: "Croatia", mobilecode: "+385"},
  {abbr: "CU", name: "Cuba", mobilecode: "+53"},
  {abbr: "CW", name: "Curaçao", mobilecode: "+599"},
  {abbr: "CY", name: "Cyprus", mobilecode: "+357"},
  {abbr: "CZ", name: "Czech Republic", mobilecode: "+420"},
  {abbr: "TL", name: "Democratic Republic of Timor-Leste", mobilecode: "+670"},
  {abbr: "DK", name: "Denmark", mobilecode: "+45"},
  {abbr: "DJ", name: "Djibouti", mobilecode: "+253"},
  {abbr: "DM", name: "Dominica", mobilecode: "+1-767"},
  {abbr: "DO", name: "Dominican Republic", mobilecode: "+1-809 and 1-829"},
  {abbr: "EC", name: "Ecuador", mobilecode: "+593"},
  {abbr: "EG", name: "Egypt", mobilecode: "+20"},
  {abbr: "SV", name: "El Salvador", mobilecode: "+503"},
  {abbr: "GQ", name: "Equatorial Guinea", mobilecode: "+240"},
  {abbr: "ER", name: "Eritrea", mobilecode: "+291"},
  {abbr: "EE", name: "Estonia", mobilecode: "+372"},
  {abbr: "ET", name: "Ethiopia", mobilecode: "+251"},
  {abbr: "FK", name: "Falkland Islands (Islas Malvinas)", mobilecode: "+500"},
  {abbr: "FO", name: "Faroe Islands", mobilecode: "+298"},
  {abbr: "FJ", name: "Fiji Islands", mobilecode: "+679"},
  {abbr: "FI", name: "Finland", mobilecode: "+358"},
  {abbr: "FR", name: "France", mobilecode: "+33"},
  {abbr: "GF", name: "French Guiana", mobilecode: "+594"},
  {abbr: "PF", name: "French Polynesia", mobilecode: "+689"},
  {abbr: "TF", name: "French Southern and Antarctic Lands", mobilecode: "+"},
  {abbr: "GA", name: "Gabon", mobilecode: "+241"},
  {abbr: "GM", name: "Gambia, The", mobilecode: "+220"},
  {abbr: "GE", name: "Georgia", mobilecode: "+995"},
  {abbr: "DE", name: "Germany", mobilecode: "+49"},
  {abbr: "GH", name: "Ghana", mobilecode: "+233"},
  {abbr: "GI", name: "Gibraltar", mobilecode: "+350"},
  {abbr: "GR", name: "Greece", mobilecode: "+30"},
  {abbr: "GL", name: "Greenland", mobilecode: "+299"},
  {abbr: "GD", name: "Grenada", mobilecode: "+1-473"},
  {abbr: "GP", name: "Guadeloupe", mobilecode: "+590"},
  {abbr: "GU", name: "Guam", mobilecode: "+1-671"},
  {abbr: "GT", name: "Guatemala", mobilecode: "+502"},
  {abbr: "GG", name: "Guernsey", mobilecode: "+44-1481"},
  {abbr: "GN", name: "Guinea", mobilecode: "+224"},
  {abbr: "GW", name: "Guinea-Bissau", mobilecode: "+245"},
  {abbr: "GY", name: "Guyana", mobilecode: "+592"},
  {abbr: "HT", name: "Haiti", mobilecode: "+509"},
  {abbr: "HM", name: "Heard Island and McDonald Islands", mobilecode: "+ "},
  {abbr: "HN", name: "Honduras", mobilecode: "+504"},
  {abbr: "HK", name: "Hong Kong SAR", mobilecode: "+852"},
  {abbr: "HU", name: "Hungary", mobilecode: "+36"},
  {abbr: "IS", name: "Iceland", mobilecode: "+354"},
  {abbr: "IN", name: "India", mobilecode: "+91"},
  {abbr: "ID", name: "Indonesia", mobilecode: "+62"},
  {abbr: "IR", name: "Iran", mobilecode: "+98"},
  {abbr: "IQ", name: "Iraq", mobilecode: "+964"},
  {abbr: "IE", name: "Ireland", mobilecode: "+353"},
  {abbr: "IL", name: "Israel", mobilecode: "+972"},
  {abbr: "IT", name: "Italy", mobilecode: "+39"},
  {abbr: "JM", name: "Jamaica", mobilecode: "+1-876"},
  {abbr: "SJ", name: "Jan Mayen", mobilecode: "+47"},
  {abbr: "JP", name: "Japan", mobilecode: "+81"},
  {abbr: "JE", name: "Jersey", mobilecode: "+44-1534"},
  {abbr: "JO", name: "Jordan", mobilecode: "+962"},
  {abbr: "KZ", name: "Kazakhstan", mobilecode: "+7"},
  {abbr: "KE", name: "Kenya", mobilecode: "+254"},
  {abbr: "KI", name: "Kiribati", mobilecode: "+686"},
  {abbr: "KR", name: "Korea", mobilecode: "+82"},
  {abbr: "XK", name: "Kosovo", mobilecode: "+"},
  {abbr: "KW", name: "Kuwait", mobilecode: "+965"},
  {abbr: "KG", name: "Kyrgyzstan", mobilecode: "+996"},
  {abbr: "LA", name: "Laos", mobilecode: "+856"},
  {abbr: "LV", name: "Latvia", mobilecode: "+371"},
  {abbr: "LB", name: "Lebanon", mobilecode: "+961"},
  {abbr: "LS", name: "Lesotho", mobilecode: "+266"},
  {abbr: "LR", name: "Liberia", mobilecode: "+231"},
  {abbr: "LY", name: "Libya", mobilecode: "+218"},
  {abbr: "LI", name: "Liechtenstein", mobilecode: "+423"},
  {abbr: "LT", name: "Lithuania", mobilecode: "+370"},
  {abbr: "LU", name: "Luxembourg", mobilecode: "+352"},
  {abbr: "MO", name: "Macao SAR", mobilecode: "+853"},
  {abbr: "MK", name: "Macedonia, Former Yugoslav Republic of", mobilecode: "+389"},
  {abbr: "MG", name: "Madagascar", mobilecode: "+261"},
  {abbr: "MW", name: "Malawi", mobilecode: "+265"},
  {abbr: "MY", name: "Malaysia", mobilecode: "+60"},
  {abbr: "MV", name: "Maldives", mobilecode: "+960"},
  {abbr: "ML", name: "Mali", mobilecode: "+223"},
  {abbr: "MT", name: "Malta", mobilecode: "+356"},
  {abbr: "IM", name: "Man, Isle of", mobilecode: "+44-1624"},
  {abbr: "MH", name: "Marshall Islands", mobilecode: "+692"},
  {abbr: "MQ", name: "Martinique", mobilecode: "+596"},
  {abbr: "MR", name: "Mauritania", mobilecode: "+222"},
  {abbr: "MU", name: "Mauritius", mobilecode: "+230"},
  {abbr: "YT", name: "Mayotte", mobilecode: "+262"},
  {abbr: "MX", name: "Mexico", mobilecode: "+52"},
  {abbr: "FM", name: "Micronesia", mobilecode: "+691"},
  {abbr: "MD", name: "Moldova", mobilecode: "+373"},
  {abbr: "MC", name: "Monaco", mobilecode: "+377"},
  {abbr: "MN", name: "Mongolia", mobilecode: "+976"},
  {abbr: "ME", name: "Montenegro", mobilecode: "+382"},
  {abbr: "MS", name: "Montserrat", mobilecode: "+1-664"},
  {abbr: "MA", name: "Morocco", mobilecode: "+212"},
  {abbr: "MZ", name: "Mozambique", mobilecode: "+258"},
  {abbr: "MM", name: "Myanmar", mobilecode: "+95"},
  {abbr: "NA", name: "Namibia", mobilecode: "+264"},
  {abbr: "NR", name: "Nauru", mobilecode: "+674"},
  {abbr: "NP", name: "Nepal", mobilecode: "+977"},
  {abbr: "NL", name: "Netherlands", mobilecode: "+31"},
  {abbr: "NC", name: "New Caledonia", mobilecode: "+687"},
  {abbr: "NZ", name: "New Zealand", mobilecode: "+64"},
  {abbr: "NI", name: "Nicaragua", mobilecode: "+505"},
  {abbr: "NE", name: "Niger", mobilecode: "+227"},
  {abbr: "NG", name: "Nigeria", mobilecode: "+234"},
  {abbr: "NU", name: "Niue", mobilecode: "+683"},
  {abbr: "NF", name: "Norfolk Island", mobilecode: "+672"},
  {abbr: "KP", name: "North Korea", mobilecode: "+850"},
  {abbr: "MP", name: "Northern Mariana Islands", mobilecode: "+1-670"},
  {abbr: "NO", name: "Norway", mobilecode: "+47"},
  {abbr: "OM", name: "Oman", mobilecode: "+968"},
  {abbr: "PK", name: "Pakistan", mobilecode: "+92"},
  {abbr: "PW", name: "Palau", mobilecode: "+680"},
  {abbr: "PS", name: "Palestinian Authority", mobilecode: "+970"},
  {abbr: "PA", name: "Panama", mobilecode: "+507"},
  {abbr: "PG", name: "Papua New Guinea", mobilecode: "+675"},
  {abbr: "PY", name: "Paraguay", mobilecode: "+595"},
  {abbr: "PE", name: "Peru", mobilecode: "+51"},
  {abbr: "PH", name: "Philippines", mobilecode: "+63"},
  {abbr: "PN", name: "Pitcairn Islands", mobilecode: "+870"},
  {abbr: "PL", name: "Poland", mobilecode: "+48"},
  {abbr: "PT", name: "Portugal",mobilecode: "+351"},
  {abbr: "PR", name: "Puerto Rico", mobilecode: "+1-787 and 1-939"},
  {abbr: "QA", name: "Qatar", mobilecode: "+974"},
  {abbr: "RE", name: "Reunion", mobilecode: "+262"},
  {abbr: "RO", name: "Romania", mobilecode: "+40"},
  {abbr: "RU", name: "Russia", mobilecode: "+7"},
  {abbr: "RW", name: "Rwanda", mobilecode: "+250"},
  {abbr: "BL", name: "Saint Barthélemy", mobilecode: "+590"},
  {abbr: "SH", name: "Saint Helena, Ascension and Tristan da Cunha",mobilecode: "+290"},
  {abbr: "KN", name: "Saint Kitts and Nevis", mobilecode: "+1-869"},
  {abbr: "LC", name: "Saint Lucia", mobilecode: "+1-758"},
  {abbr: "MF", name: "Saint Martin (French part)", mobilecode: "+590"},
  {abbr: "PM", name: "Saint Pierre and Miquelon", mobilecode: "+508"},
  {abbr: "VC", name: "Saint Vincent and the Grenadines", mobilecode: "+1-784"},
  {abbr: "WS", name: "Samoa", mobilecode: "+685"},
  {abbr: "SM", name: "San Marino", mobilecode: "+378"},
  {abbr: "ST", name: "São Tomé and Príncipe",mobilecode: "+239"},
  {abbr: "SA", name: "Saudi Arabia", mobilecode: "+966"},
  {abbr: "SN", name: "Senegal",mobilecode: "+221"},
  {abbr: "RS", name: "Serbia", mobilecode: "+381"},
  {abbr: "SC", name: "Seychelles", mobilecode: "+248"},
  {abbr: "SL", name: "Sierra Leone",mobilecode: "+232"},
  {abbr: "SG", name: "Singapore", mobilecode: "+65"},
  {abbr: "SX", name: "Sint Maarten (Dutch part)", mobilecode: "+599"},
  {abbr: "SK", name: "Slovakia", mobilecode: "+421"},
  {abbr: "SI", name: "Slovenia", mobilecode: "+386"},
  {abbr: "SB", name: "Solomon Islands", mobilecode: "+677"},
  {abbr: "SO", name: "Somalia", mobilecode: "+252"},
  {abbr: "ZA", name: "South Africa", mobilecode: "+27"},
  {abbr: "GS", name: "South Georgia and the South Sandwich Islands", mobilecode: "+"},
  {abbr: "SS", name: "South Sudan", mobilecode: "+211"},
  {abbr: "ES", name: "Spain", mobilecode: "+34"},
  {abbr: "LK", name: "Sri Lanka", mobilecode: "+94"},
  {abbr: "SD", name: "Sudan", mobilecode: "+249"},
  {abbr: "SR", name: "Suriname", mobilecode: "+597"},
  {abbr: "SJ", name: "Svalbard", mobilecode: "+47"},
  {abbr: "SZ", name: "Swaziland", mobilecode: "+268"},
  {abbr: "SE", name: "Sweden", mobilecode: "+46"},
  {abbr: "CH", name: "Switzerland", mobilecode: "+41"},
  {abbr: "SY", name: "Syria", mobilecode: "+963"},
  {abbr: "TW", name: "Taiwan", mobilecode: "+886"},
  {abbr: "TJ", name: "Tajikistan", mobilecode: "+992"},
  {abbr: "TZ", name: "Tanzania", mobilecode: "+255"},
  {abbr: "TH", name: "Thailand", mobilecode: "+66"},
  {abbr: "TG", name: "Togo",mobilecode: "+228"},
  {abbr: "TK", name: "Tokelau", mobilecode: "+690"},
  {abbr: "TO", name: "Tonga", mobilecode: "+676"},
  {abbr: "TT", name: "Trinidad and Tobago", mobilecode: "+1-868"},
  {abbr: "TN", name: "Tunisia", mobilecode: "+216"},
  {abbr: "TR", name: "Turkey", mobilecode: "+90"},
  {abbr: "TM", name: "Turkmenistan", mobilecode: "+993"},
  {abbr: "TC", name: "Turks and Caicos Islands", mobilecode: "+1-649"},
  {abbr: "TV", name: "Tuvalu", mobilecode: "+688"},
  {abbr: "UM", name: "U.S. Minor Outlying Islands", mobilecode: "+1"},
  {abbr: "UG", name: "Uganda", mobilecode: "+256"},
  {abbr: "UA", name: "Ukraine", mobilecode: "+380"},
  {abbr: "AE", name: "United Arab Emirates", mobilecode: "+971"},
  {abbr: "GB", name: "United Kingdom",mobilecode: "+44"},
  {abbr: "US", name: "United States", mobilecode: "+1"},
  {abbr: "UY", name: "Uruguay", mobilecode: "+598"},
  {abbr: "UZ", name: "Uzbekistan", mobilecode: "+998"},
  {abbr: "VU", name: "Vanuatu", mobilecode: "+678"},
  {abbr: "VA", name: "Vatican City", mobilecode: "+379"},
  {abbr: "VN", name: "Vietnam", mobilecode: "+84"},
  {abbr: "VI", name: "Virgin Islands, U.S.", mobilecode: "+1-340"},
  {abbr: "VG", name: "Virgin Islands, British", mobilecode: "+1-284"},
  {abbr: "WF", name: "Wallis and Futuna", mobilecode: "+681"},
  {abbr: "YE", name: "Yemen", mobilecode: "+967"},
  {abbr: "ZM", name: "Zambia", mobilecode: "+260"},
  {abbr: "ZW", name: "Zimbabwe", mobilecode: "+263"}
]

export default countries;
