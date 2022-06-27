import { Box, Button, Container, List, ListItemText, Paper } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import useStyles from "./listerStyles";

function Lister(props) {
  const { response, userName, tempRef, getMoreMessages } = props;
  const classes = useStyles();
  return (
    <List
      classes={{
        root: classes.listRoot,
      }}
    >
      <Button
        onClick={() => {
          getMoreMessages();
        }}
      >
        <ArrowUpwardIcon />
      </Button>
      {response.map((x, key) => {
        console.log(x)
        return (
          <Container
            key={1}
            style={{
              display: "flex",
              justifyContent: x.user === userName ? "flex-end" : "flex-start",
            }}
          >
            <Paper
              variant="elevation"
              elevation={24}
              classes={{
                root: classes.paperStyle,
              }}
              style={{
                alignSelf: x.user === userName ? "flex-end" : "flex-start",
                backgroundColor: x.user === userName ? "pink" : x.user === "messageBot" ? "lightgrey" : "skyblue",
              }}
            >
              <Box>
                {x.user + ": "}
                <ListItemText
                  ref={tempRef}
                  primary={x.message || "' '"}
                  classes={{
                    root: classes.root,
                    multiline: classes.multiline,
                    primary: classes.primary,
                  }}
                />
              </Box>
            </Paper>
          </Container>
        );
      })}
    </List>
  );
}

export default Lister;
