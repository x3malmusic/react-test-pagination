import { connect } from "react-redux";
import App from "../pages/App";
import { getPhotos } from "../redux-store/actions";

const mapStateToProps = ({ photos: { photos }}) => ({
  photos
});

const mapDispatchToProps = (dispatch) => ({
  getPhotos: (page) => dispatch(getPhotos(page)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
