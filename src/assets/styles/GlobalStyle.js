import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import backgroundImage from '../../assets/images/banner.jpg';



const GlobalStyle = () => {

    //LoginForm Style
    const FormWrapper = styled(Box)(({ theme }) => ({
        width: "400px",
        padding: theme.spacing(4),
        boxShadow: "0px 10px 50px rgba(34, 60, 80, 0.2)",
        borderRadius: "10px",
        backgroundColor: "#fff"
      }));
      
      const LogoWrapper = styled(Box)({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "32px",
      });
      
      const LogoImage = styled("img")({
        width: "100px",
        height: "98px",
        borderRadius: "55px",
        backgroundSize: "cover",
        backgroundPosition: "center"
      });

      const PageWrapper = styled("div")({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      });

      return {
        FormWrapper,
        LogoWrapper,
        LogoImage,
        PageWrapper,
      };  
};

export default GlobalStyle;