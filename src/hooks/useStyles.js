import {makeStyles} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    toolbarContainer: {
        backgroundColor: "#000",
    },
    toolbar: {
        margin: "0 auto",
        position: "relative",
        width: "92.5%",
        maxWidth: "1280px",
    },
    logo: {
        height: "57px",
        width: "100px"
    },
    container: {
        backgroundColor: "#fafafa",
        padding: theme.spacing(8, 0, 6),
        marginBottom: 20
    }
}))

export default useStyles;
