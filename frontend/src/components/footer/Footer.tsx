import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    width: "100%",
    minHeight: "20vh",
    maxHeight: "30vh",
    marginTop: theme.spacing(4),
    color: theme.palette.common.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  loveText: {
    fontSize: "24px",
    padding: theme.spacing(2),
    "& span": {
      marginLeft: theme.spacing(1),
    },
  },
  link: {
    color: theme.palette.common.white,
    textDecoration: "none",
    fontWeight: "bold",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footerContainer}>
      <div>
        <p className={classes.loveText}>
          Built with love by
          <span>
            <Link
              className={classes.link}
              to={"https://www.linkedin.com/in/adityad12/"}
            >
              Aditya Mishra
            </Link>
          </span>{" "}
          💘
        </p>
      </div>
    </footer>
  );
};

export default Footer;
