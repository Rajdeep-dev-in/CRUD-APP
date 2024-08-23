import {Grid} from 'react-loader-spinner'

function Loader(){
    return(
        <Grid
  visible={true}
  height="100"
  width="100"
  color="#FF0000"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass="grid-wrapper"
  />

    )
}

export default Loader;