import { useState } from 'react';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormLabel from '@mui/material/FormLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';

// import Box from '@mui/material/Box';

const SignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
        phone: '',
        dob: '',
        gender: '',
        hobbies: [],
        profilePicture: null,
        country: '',
        bio: '',
        agree: false,
    });
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [submitStatus, setSubmitStatus] = useState(null);

    const submitSignup = (e) => {
        e.preventDefault();
        console.log(formData);
        try {
            // Dummy API
            const response = axios.post('https://jsonplaceholder.typicode.com/users', {
                formData
            });
            setResponse(response.data);
            setError(null);
            setSubmitStatus('success');
            setTimeout(() => {
                setSubmitStatus(null);
            }, 2000);

        } catch (error) {
            setResponse(null);
            setError(error.message);
            setSubmitStatus('error');
            setTimeout(() => {
                setSubmitStatus(null);
            }, 2000);
        }
    };

    const handleCheckboxChange = (e) => {
        const { name, value, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
        if (name === 'hobbies') {
            const newHobbies = checked
                ? [...formData.hobbies, value]
                : [];
            setFormData({ ...formData, hobbies: newHobbies });
        }

    };

    const handleFile = (e) => {
        setFormData({ ...formData, profilePicture: e.target.files[0] });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAgree = (e) => {
        const { name, checked } = e.target;
        setFormData({ ...formData, [name]: checked });
    };


    return (
        <Container maxWidth="xs">
            <div>
                {submitStatus === 'success' && (
                    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
                        Data submitted successfully.
                    </Alert>
                )}
                {submitStatus === 'error' && (
                    <Alert severity="error">
                        Error submitting data. Please try again.
                    </Alert>
                )}
            </div>
            <Typography variant="h4" align="center" gutterBottom>
                Sign Up
            </Typography>
            <form onSubmit={submitSignup}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="fullName"
                            label="Full Name"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="userName"
                            label="User Name"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="phone"
                            label="Phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="password"
                            label="Password"
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant="outlined"
                            required
                            fullWidth
                            id="confirmPassword"
                            label="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Birth Date"
                            variant="outlined"
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            required
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl fullWidth required>
                            <InputLabel id="country">Select Country</InputLabel>
                            <Select
                                labelId="country-label"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            >
                                <MenuItem value="" disabled selected>Select your country</MenuItem>
                                <MenuItem value="Afghanistan">Afghanistan</MenuItem>
                                <MenuItem value="Åland Islands">Åland Islands</MenuItem>
                                <MenuItem value="Albania">Albania</MenuItem>
                                <MenuItem value="Algeria">Algeria</MenuItem>
                                <MenuItem value="American Samoa">American Samoa</MenuItem>
                                <MenuItem value="Andorra">Andorra</MenuItem>
                                <MenuItem value="Angola">Angola</MenuItem>
                                <MenuItem value="Anguilla">Anguilla</MenuItem>
                                <MenuItem value="Antarctica">Antarctica</MenuItem>
                                <MenuItem value="Antigua and Barbuda">Antigua and Barbuda</MenuItem>
                                <MenuItem value="Argentina">Argentina</MenuItem>
                                <MenuItem value="Armenia">Armenia</MenuItem>
                                <MenuItem value="Aruba">Aruba</MenuItem>
                                <MenuItem value="Australia">Australia</MenuItem>
                                <MenuItem value="Austria">Austria</MenuItem>
                                <MenuItem value="Azerbaijan">Azerbaijan</MenuItem>
                                <MenuItem value="Bahamas">Bahamas</MenuItem>
                                <MenuItem value="Bahrain">Bahrain</MenuItem>
                                <MenuItem value="Bangladesh">Bangladesh</MenuItem>
                                <MenuItem value="Barbados">Barbados</MenuItem>
                                <MenuItem value="Belarus">Belarus</MenuItem>
                                <MenuItem value="Belgium">Belgium</MenuItem>
                                <MenuItem value="Belize">Belize</MenuItem>
                                <MenuItem value="Benin">Benin</MenuItem>
                                <MenuItem value="Bermuda">Bermuda</MenuItem>
                                <MenuItem value="Bhutan">Bhutan</MenuItem>
                                <MenuItem value="Bolivia">Bolivia</MenuItem>
                                <MenuItem value="Bosnia and Herzegovina">Bosnia and Herzegovina</MenuItem>
                                <MenuItem value="Botswana">Botswana</MenuItem>
                                <MenuItem value="Bouvet Island">Bouvet Island</MenuItem>
                                <MenuItem value="Brazil">Brazil</MenuItem>
                                <MenuItem value="British Indian Ocean Territory">British Indian Ocean Territory</MenuItem>
                                <MenuItem value="Brunei Darussalam">Brunei Darussalam</MenuItem>
                                <MenuItem value="Bulgaria">Bulgaria</MenuItem>
                                <MenuItem value="Burkina Faso">Burkina Faso</MenuItem>
                                <MenuItem value="Burundi">Burundi</MenuItem>
                                <MenuItem value="Cambodia">Cambodia</MenuItem>
                                <MenuItem value="Cameroon">Cameroon</MenuItem>
                                <MenuItem value="Canada">Canada</MenuItem>
                                <MenuItem value="Cape Verde">Cape Verde</MenuItem>
                                <MenuItem value="Cayman Islands">Cayman Islands</MenuItem>
                                <MenuItem value="Central African Republic">Central African Republic</MenuItem>
                                <MenuItem value="Chad">Chad</MenuItem>
                                <MenuItem value="Chile">Chile</MenuItem>
                                <MenuItem value="China">China</MenuItem>
                                <MenuItem value="Christmas Island">Christmas Island</MenuItem>
                                <MenuItem value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</MenuItem>
                                <MenuItem value="Colombia">Colombia</MenuItem>
                                <MenuItem value="Comoros">Comoros</MenuItem>
                                <MenuItem value="Congo">Congo</MenuItem>
                                <MenuItem value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The
                                </MenuItem>
                                <MenuItem value="Cook Islands">Cook Islands</MenuItem>
                                <MenuItem value="Costa Rica">Costa Rica</MenuItem>
                                <MenuItem value="Cote D'ivoire">Cote D'ivoire</MenuItem>
                                <MenuItem value="Croatia">Croatia</MenuItem>
                                <MenuItem value="Cuba">Cuba</MenuItem>
                                <MenuItem value="Cyprus">Cyprus</MenuItem>
                                <MenuItem value="Czech Republic">Czech Republic</MenuItem>
                                <MenuItem value="Denmark">Denmark</MenuItem>
                                <MenuItem value="Djibouti">Djibouti</MenuItem>
                                <MenuItem value="Dominica">Dominica</MenuItem>
                                <MenuItem value="Dominican Republic">Dominican Republic</MenuItem>
                                <MenuItem value="Ecuador">Ecuador</MenuItem>
                                <MenuItem value="Egypt">Egypt</MenuItem>
                                <MenuItem value="El Salvador">El Salvador</MenuItem>
                                <MenuItem value="Equatorial Guinea">Equatorial Guinea</MenuItem>
                                <MenuItem value="Eritrea">Eritrea</MenuItem>
                                <MenuItem value="Estonia">Estonia</MenuItem>
                                <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                                <MenuItem value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</MenuItem>
                                <MenuItem value="Faroe Islands">Faroe Islands</MenuItem>
                                <MenuItem value="Fiji">Fiji</MenuItem>
                                <MenuItem value="Finland">Finland</MenuItem>
                                <MenuItem value="France">France</MenuItem>
                                <MenuItem value="French Guiana">French Guiana</MenuItem>
                                <MenuItem value="French Polynesia">French Polynesia</MenuItem>
                                <MenuItem value="French Southern Territories">French Southern Territories</MenuItem>
                                <MenuItem value="Gabon">Gabon</MenuItem>
                                <MenuItem value="Gambia">Gambia</MenuItem>
                                <MenuItem value="Georgia">Georgia</MenuItem>
                                <MenuItem value="Germany">Germany</MenuItem>
                                <MenuItem value="Ghana">Ghana</MenuItem>
                                <MenuItem value="Gibraltar">Gibraltar</MenuItem>
                                <MenuItem value="Greece">Greece</MenuItem>
                                <MenuItem value="Greenland">Greenland</MenuItem>
                                <MenuItem value="Grenada">Grenada</MenuItem>
                                <MenuItem value="Guadeloupe">Guadeloupe</MenuItem>
                                <MenuItem value="Guam">Guam</MenuItem>
                                <MenuItem value="Guatemala">Guatemala</MenuItem>
                                <MenuItem value="Guernsey">Guernsey</MenuItem>
                                <MenuItem value="Guinea">Guinea</MenuItem>
                                <MenuItem value="Guinea-bissau">Guinea-bissau</MenuItem>
                                <MenuItem value="Guyana">Guyana</MenuItem>
                                <MenuItem value="Haiti">Haiti</MenuItem>
                                <MenuItem value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</MenuItem>
                                <MenuItem value="Holy See (Vatican City State)">Holy See (Vatican City State)</MenuItem>
                                <MenuItem value="Honduras">Honduras</MenuItem>
                                <MenuItem value="Hong Kong">Hong Kong</MenuItem>
                                <MenuItem value="Hungary">Hungary</MenuItem>
                                <MenuItem value="Iceland">Iceland</MenuItem>
                                <MenuItem value="India">India</MenuItem>
                                <MenuItem value="Indonesia">Indonesia</MenuItem>
                                <MenuItem value="Iran, Islamic Republic of">Iran, Islamic Republic of</MenuItem>
                                <MenuItem value="Iraq">Iraq</MenuItem>
                                <MenuItem value="Ireland">Ireland</MenuItem>
                                <MenuItem value="Isle of Man">Isle of Man</MenuItem>
                                <MenuItem value="Israel">Israel</MenuItem>
                                <MenuItem value="Italy">Italy</MenuItem>
                                <MenuItem value="Jamaica">Jamaica</MenuItem>
                                <MenuItem value="Japan">Japan</MenuItem>
                                <MenuItem value="Jersey">Jersey</MenuItem>
                                <MenuItem value="Jordan">Jordan</MenuItem>
                                <MenuItem value="Kazakhstan">Kazakhstan</MenuItem>
                                <MenuItem value="Kenya">Kenya</MenuItem>
                                <MenuItem value="Kiribati">Kiribati</MenuItem>
                                <MenuItem value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of
                                </MenuItem>
                                <MenuItem value="Korea, Republic of">Korea, Republic of</MenuItem>
                                <MenuItem value="Kuwait">Kuwait</MenuItem>
                                <MenuItem value="Kyrgyzstan">Kyrgyzstan</MenuItem>
                                <MenuItem value="Lao People's Democratic Republic">Lao People's Democratic Republic</MenuItem>
                                <MenuItem value="Latvia">Latvia</MenuItem>
                                <MenuItem value="Lebanon">Lebanon</MenuItem>
                                <MenuItem value="Lesotho">Lesotho</MenuItem>
                                <MenuItem value="Liberia">Liberia</MenuItem>
                                <MenuItem value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</MenuItem>
                                <MenuItem value="Liechtenstein">Liechtenstein</MenuItem>
                                <MenuItem value="Lithuania">Lithuania</MenuItem>
                                <MenuItem value="Luxembourg">Luxembourg</MenuItem>
                                <MenuItem value="Macao">Macao</MenuItem>
                                <MenuItem value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav
                                    Republic of
                                </MenuItem>
                                <MenuItem value="Madagascar">Madagascar</MenuItem>
                                <MenuItem value="Malawi">Malawi</MenuItem>
                                <MenuItem value="Malaysia">Malaysia</MenuItem>
                                <MenuItem value="Maldives">Maldives</MenuItem>
                                <MenuItem value="Mali">Mali</MenuItem>
                                <MenuItem value="Malta">Malta</MenuItem>
                                <MenuItem value="Marshall Islands">Marshall Islands</MenuItem>
                                <MenuItem value="Martinique">Martinique</MenuItem>
                                <MenuItem value="Mauritania">Mauritania</MenuItem>
                                <MenuItem value="Mauritius">Mauritius</MenuItem>
                                <MenuItem value="Mayotte">Mayotte</MenuItem>
                                <MenuItem value="Mexico">Mexico</MenuItem>
                                <MenuItem value="Micronesia, Federated States of">Micronesia, Federated States of</MenuItem>
                                <MenuItem value="Moldova, Republic of">Moldova, Republic of</MenuItem>
                                <MenuItem value="Monaco">Monaco</MenuItem>
                                <MenuItem value="Mongolia">Mongolia</MenuItem>
                                <MenuItem value="Montenegro">Montenegro</MenuItem>
                                <MenuItem value="Montserrat">Montserrat</MenuItem>
                                <MenuItem value="Morocco">Morocco</MenuItem>
                                <MenuItem value="Mozambique">Mozambique</MenuItem>
                                <MenuItem value="Myanmar">Myanmar</MenuItem>
                                <MenuItem value="Namibia">Namibia</MenuItem>
                                <MenuItem value="Nauru">Nauru</MenuItem>
                                <MenuItem value="Nepal">Nepal</MenuItem>
                                <MenuItem value="Netherlands">Netherlands</MenuItem>
                                <MenuItem value="Netherlands Antilles">Netherlands Antilles</MenuItem>
                                <MenuItem value="New Caledonia">New Caledonia</MenuItem>
                                <MenuItem value="New Zealand">New Zealand</MenuItem>
                                <MenuItem value="Nicaragua">Nicaragua</MenuItem>
                                <MenuItem value="Niger">Niger</MenuItem>
                                <MenuItem value="Nigeria">Nigeria</MenuItem>
                                <MenuItem value="Niue">Niue</MenuItem>
                                <MenuItem value="Norfolk Island">Norfolk Island</MenuItem>
                                <MenuItem value="Northern Mariana Islands">Northern Mariana Islands</MenuItem>
                                <MenuItem value="Norway">Norway</MenuItem>
                                <MenuItem value="Oman">Oman</MenuItem>
                                <MenuItem value="Pakistan">Pakistan</MenuItem>
                                <MenuItem value="Palau">Palau</MenuItem>
                                <MenuItem value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</MenuItem>
                                <MenuItem value="Panama">Panama</MenuItem>
                                <MenuItem value="Papua New Guinea">Papua New Guinea</MenuItem>
                                <MenuItem value="Paraguay">Paraguay</MenuItem>
                                <MenuItem value="Peru">Peru</MenuItem>
                                <MenuItem value="Philippines">Philippines</MenuItem>
                                <MenuItem value="Pitcairn">Pitcairn</MenuItem>
                                <MenuItem value="Poland">Poland</MenuItem>
                                <MenuItem value="Portugal">Portugal</MenuItem>
                                <MenuItem value="Puerto Rico">Puerto Rico</MenuItem>
                                <MenuItem value="Qatar">Qatar</MenuItem>
                                <MenuItem value="Reunion">Reunion</MenuItem>
                                <MenuItem value="Romania">Romania</MenuItem>
                                <MenuItem value="Russian Federation">Russian Federation</MenuItem>
                                <MenuItem value="Rwanda">Rwanda</MenuItem>
                                <MenuItem value="Saint Helena">Saint Helena</MenuItem>
                                <MenuItem value="Saint Kitts and Nevis">Saint Kitts and Nevis</MenuItem>
                                <MenuItem value="Saint Lucia">Saint Lucia</MenuItem>
                                <MenuItem value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</MenuItem>
                                <MenuItem value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</MenuItem>
                                <MenuItem value="Samoa">Samoa</MenuItem>
                                <MenuItem value="San Marino">San Marino</MenuItem>
                                <MenuItem value="Sao Tome and Principe">Sao Tome and Principe</MenuItem>
                                <MenuItem value="Saudi Arabia">Saudi Arabia</MenuItem>
                                <MenuItem value="Senegal">Senegal</MenuItem>
                                <MenuItem value="Serbia">Serbia</MenuItem>
                                <MenuItem value="Seychelles">Seychelles</MenuItem>
                                <MenuItem value="Sierra Leone">Sierra Leone</MenuItem>
                                <MenuItem value="Singapore">Singapore</MenuItem>
                                <MenuItem value="Slovakia">Slovakia</MenuItem>
                                <MenuItem value="Slovenia">Slovenia</MenuItem>
                                <MenuItem value="Solomon Islands">Solomon Islands</MenuItem>
                                <MenuItem value="Somalia">Somalia</MenuItem>
                                <MenuItem value="South Africa">South Africa</MenuItem>
                                <MenuItem value="South Georgia and The South Sandwich Islands">South Georgia and The South
                                    Sandwich Islands
                                </MenuItem>
                                <MenuItem value="Spain">Spain</MenuItem>
                                <MenuItem value="Sri Lanka">Sri Lanka</MenuItem>
                                <MenuItem value="Sudan">Sudan</MenuItem>
                                <MenuItem value="Suriname">Suriname</MenuItem>
                                <MenuItem value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</MenuItem>
                                <MenuItem value="Swaziland">Swaziland</MenuItem>
                                <MenuItem value="Sweden">Sweden</MenuItem>
                                <MenuItem value="Switzerland">Switzerland</MenuItem>
                                <MenuItem value="Syrian Arab Republic">Syrian Arab Republic</MenuItem>
                                <MenuItem value="Taiwan">Taiwan</MenuItem>
                                <MenuItem value="Tajikistan">Tajikistan</MenuItem>
                                <MenuItem value="Tanzania, United Republic of">Tanzania, United Republic of</MenuItem>
                                <MenuItem value="Thailand">Thailand</MenuItem>
                                <MenuItem value="Timor-leste">Timor-leste</MenuItem>
                                <MenuItem value="Togo">Togo</MenuItem>
                                <MenuItem value="Tokelau">Tokelau</MenuItem>
                                <MenuItem value="Tonga">Tonga</MenuItem>
                                <MenuItem value="Trinidad and Tobago">Trinidad and Tobago</MenuItem>
                                <MenuItem value="Tunisia">Tunisia</MenuItem>
                                <MenuItem value="Turkey">Turkey</MenuItem>
                                <MenuItem value="Turkmenistan">Turkmenistan</MenuItem>
                                <MenuItem value="Turks and Caicos Islands">Turks and Caicos Islands</MenuItem>
                                <MenuItem value="Tuvalu">Tuvalu</MenuItem>
                                <MenuItem value="Uganda">Uganda</MenuItem>
                                <MenuItem value="Ukraine">Ukraine</MenuItem>
                                <MenuItem value="United Arab Emirates">United Arab Emirates</MenuItem>
                                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                                <MenuItem value="United States">United States</MenuItem>
                                <MenuItem value="United States Minor Outlying Islands">United States Minor Outlying Islands
                                </MenuItem>
                                <MenuItem value="Uruguay">Uruguay</MenuItem>
                                <MenuItem value="Uzbekistan">Uzbekistan</MenuItem>
                                <MenuItem value="Vanuatu">Vanuatu</MenuItem>
                                <MenuItem value="Venezuela">Venezuela</MenuItem>
                                <MenuItem value="Viet Nam">Viet Nam</MenuItem>
                                <MenuItem value="Virgin Islands, British">Virgin Islands, British</MenuItem>
                                <MenuItem value="Virgin Islands, U.S.">Virgin Islands, U.S.</MenuItem>
                                <MenuItem value="Wallis and Futuna">Wallis and Futuna</MenuItem>
                                <MenuItem value="Western Sahara">Western Sahara</MenuItem>
                                <MenuItem value="Yemen">Yemen</MenuItem>
                                <MenuItem value="Zambia">Zambia</MenuItem>
                                <MenuItem value="Zimbabwe">Zimbabwe</MenuItem>

                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <FormControl component="fieldset" required>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup
                                name="gender"
                                value={formData.gender}
                                onChange={handleChange}
                                row
                            >
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Bio
                        </Typography>
                        <TextField
                            id="bio"
                            name="bio"
                            multiline
                            rows={5}
                            placeholder="Write your bio here"
                            variant="outlined"
                            value={formData.bio}
                            onChange={handleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" gutterBottom>
                            Hobbies
                        </Typography>
                        <FormGroup>
                            <FormControlLabel
                                control={<Checkbox checked={formData.hobbies.includes('Hobby1')} onChange={handleCheckboxChange} name="hobbies" value="Hobby1" />}
                                label="Hobby1"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={formData.hobbies.includes('Hobby2')} onChange={handleCheckboxChange} name="hobbies" value="Hobby2" />}
                                label="Hobby2"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={formData.hobbies.includes('Hobby3')} onChange={handleCheckboxChange} name="hobbies" value="Hobby3" />}
                                label="Hobby3"
                            />
                            <FormControlLabel
                                control={<Checkbox checked={formData.hobbies.includes('Hobby4')} onChange={handleCheckboxChange} name="hobbies" value="Hobby4" />}
                                label="Hobby4"
                            />
                        </FormGroup>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <TextField
                            label="Profile Picture"
                            variant="outlined"
                            type="file"
                            name="profilePicture"
                            onChange={handleFile}
                            InputLabelProps={{ shrink: true }}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={formData.agree}
                                        onChange={handleAgree}
                                        name="agree"
                                        id="agreeCheckbox"
                                    />
                                }
                                label="Agree to Terms and Conditions"
                            />
                        </FormGroup>
                    </Grid>

                    <Button type="submit" variant="contained" color="primary">
                        Submit
                    </Button>

                </Grid>
            </form>
        </Container >
    );

}

export default SignUp;