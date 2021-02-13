import imagePath from './cat.jpg'

const NotFoundPage = () => {
  return (
    <>
      <img style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}} src={imagePath} alt="cat" width='500' />
      <h1>
        О-оу, походу вы перешли по несуществующему адресу ... уходим
      </h1>
    </>

  );
};

export default NotFoundPage;