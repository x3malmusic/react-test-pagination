import React, { useEffect, useState } from "react";
import { Paper, makeStyles, Card, CardContent } from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles({
  paper: {
    padding: 16,
  },
  pagination: {
    marginTop: 16,
  },
  card: {
    marginBottom: 8,
  }
})

export default function App({ photos, getPhotos }) {
  const classes = useStyles();
  const [page, setPage] = useState(null)

  const onPageChange = (e, page) => {
    setPage(page)
  }

  useEffect(() => {
    getPhotos(page);
  }, [page]);

  return (
    <Paper elevation={2} className={classes.paper}>
      {photos && photos.data.map(item => (
        <Card variant="outlined" key={item._id} className={classes.card}>
          <CardContent>
            {item.name}
          </CardContent>
        </Card>
      ))}
      <Pagination
        className={classes.pagination}
        count={10}
        color="primary"
        onChange={onPageChange}
      />
    </Paper>
  );
};