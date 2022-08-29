import { Typography } from '@mui/material';
import React from 'react'
import "./About.css";
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer">
            <Typography>
                <Typography variant="h5">कर्मण्येवाधिकारस्ते मा फलेषु कदाचन । </Typography>
                <Typography variant="h5">मा कर्मफलहेतुर्भुर्मा ते संगोऽस्त्वकर्मणि ॥ </Typography>
                <Typography>🙏🙏🙏</Typography>
            </Typography>
        </div>
        <div className="aboutContainer2">
            <div>
                <img src="https://scontent.fbho1-1.fna.fbcdn.net/v/t1.6435-9/79125193_1000255163674645_2568631553882062848_n.jpg?_nc_cat=102&amp;ccb=1-7&amp;_nc_sid=09cbfe&amp;_nc_ohc=Il0I-5gVVVkAX93gJrr&amp;_nc_ht=scontent.fbho1-1.fna&amp;oh=00_AT8Be00CeBa9-TIF3QS0hAvrLW9lnwaVYTzmJ9bN1M72Lg&amp;oe=63314800" 
                alt="Sudhi" className="aboutAvatar"/>
                <Typography variant="h4" 
                    style= {{
                        margin: "1vmax 0", color: "black"
                    }}
                >Sudhi Ranjan</Typography>
                <Typography>AI/ML & Fullstack Web.D</Typography>
                <Typography>😊😊 Fresher 😊😊</Typography>
            </div>
            <div>
                <Typography style = {{
                    wordSpacing: "5px",
                    lineHeight: "40px",
                    letterSpacing: "5px",
                    textAlign: "right",
                }}>
                    This is desciption ... The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md
                </Typography>
            </div>
        </div>
    </div>
  );
};

export default About;