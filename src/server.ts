import App from './app';

const PORT = process.env.PORT || 3001;

App.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
