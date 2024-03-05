#### 🌟 star the repo if you like it

<div align=center>
  <img src="https://github.com/kanugurajesh/Audio-Recorder/assets/77529419/e23d4b9b-6af8-42b1-92e9-b747809f3897" width=100 height=100 />
</div>

# Audio Recorder

An application to record audio with the help of react and download it in mp3 format

## Features

- Audio Recording
- Offline Compatible
- Downloadable Audio

## Project Setup

```bash
# fork the repo to your github
git clone https://github.com/your-username/Audio-Recorder
# change your directory to the Application directory
cd Audio-Recorder
# install the packages
npm install
# Run the application
npm run dev
```

## Screenshots

![Screenshot 2024-03-05 235707](https://github.com/kanugurajesh/Audio-Recorder/assets/77529419/6fe3b3a7-6dc4-4f19-b5e1-35606cece24d)

![Screenshot 2024-03-05 235713](https://github.com/kanugurajesh/Audio-Recorder/assets/77529419/1f5bc6e3-f0a4-4f08-a4db-23acf4e63736)

![Screenshot 2024-03-05 235731](https://github.com/kanugurajesh/Audio-Recorder/assets/77529419/3565a0a0-90ee-462a-90ed-24e112c12d65)

![Screenshot 2024-03-05 235737](https://github.com/kanugurajesh/Audio-Recorder/assets/77529419/a2c8bc5c-d1c3-4e47-b0ce-34d6f4dd3422)

![Screenshot 2024-03-05 235747](https://github.com/kanugurajesh/Audio-Recorder/assets/77529419/10929506-c207-43a3-b67f-cc96d352db1f)

![Screenshot 2024-03-05 235754](https://github.com/kanugurajesh/Audio-Recorder/assets/77529419/b0fd231a-9801-43a6-afde-2ab1082d5891)

## Contribution Guidelines

We welcome contributions to enhance and improve the llm app. If you have ideas or improvements, feel free to submit a pull request following our contribution guidelines.

## Feedback and Issues

If you encounter any issues or have feedback, please open an issue on our [GitHub repository](https://github.com/kanugurajesh/Student-LMS/issues). We appreciate your input and strive to make our system better with each update.

## Tech Stack

- React
- Vite
- TailwindCSS

## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://rajeshportfolio.me/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/exploringengin1)
  
## Authors

- [@kanugurajesh](https://github.com/kanugurajesh)

## Support

For support, you can buy me a coffee

<a href="https://www.buymeacoffee.com/kanugurajen" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

<br>
<hr>

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
