# BEES-interview-project
Project created for the purposes of a job interview

# Description
It was asked of me to create an application that fetched data from a public API and populated a list to be displayed on the UI in the shape of cards with specific information provided by the API.

## Dev's choices
Since the job posting is for a React front-end developer, I'm using on this project: 
- [x] React
- [x] Typescript
- [x] Styled Components
- [x] React Context
- [x] React Router Dom
- [ ] React Testing Library
- [ ] Eslint

### Folder Structure
Following what I've been using on a daily basis on the current project I'm working on, the following folder structure is being used on this project.

```
bees   
└───public
└───src
│   │
│   └───assets
│       └─── images
│   │       │   addMore.svg
│   │       │   back.svg
│   │       │   bee.svg
│   │       │   bin.svg
│   │       │   check.svg
│   │       │   phone.svg
│   │       │   postal.svg
│   │       │   type.svg
│   └───components
│       └─── BreweryList
│   │       │   BreweryList.tsx
│   │   │   │   BreweryList.types.ts
│   │   └─── Cards
│   │        │   Card.tsx
│   │   │    │   CardsList.tsx
│   │   │    │   CardsList.styles.ts
│   │   └─── Context
│   │       │   UseContext.tsx
│   │   │   │   UserContext.types.ts
│   │   └─── Header
│   │       │   Header.styles.ts
│   │   │   │   Header.tsx
│   │   └─── HomePage
│   │       │   HomePage.styles.ts
│   │   │   │   HomePage.tsx
```

# How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Project's criteria
### Must have 
#### First screen
- [x] The UI of the first screen contains: an input text, a checkbox, some labels, a button, background and an image.
- [x] The input text component, where the user should enter his/her full name and a checkbox asking if he/she is older than 18 (since we'll display brewery information). Note that the button should be enabled **ONLY** if the user enters the full name and checks the checkbox, if one of these conditions are not filled the button should remain disabled
#### Once everything is ok and the user enters the second screen
- [x] You should fetch data from this [public API](https://www.openbrewerydb.org/documentation/01-listbreweries)
- [x] Once the data was fetched you can keep it your local state or global state
- [x] The cards contains: a title, address information, city/state/country that should be concatenated, three required tags containing the type of the brewery, postal code and telephone (tags are not editable) and a **optional/bonus tag** to add more tags(details below) **if you don't plan to implement the 'add more' tag don't add it to the screen**. There is also a top left delete button (more details about behaviour below). Style should follow the prototype, hover behaviours are optional but much appreciated if implemented (e.g: cursor pointer for buttons)
- [x] When the user clicks on the delete icon, the whole card must be removed from the list and the cards should be re-arranged
- [x] When the user clicks on go back button, or the left arrow he/she should return to the first screen and the input text and checkbox should be empty
- [x] You should show the user full name in the top right corner of the page

### Nice to have / Bonus  
- [x] Implement using Typescript
- [x] Save user name in the global state (feel free to use any tool/library)
- [ ] Write unit tests (suggested tool: jest+enzyme or react-testing-library)
- [ ] Write component/UI tests (suggested tool: using cypress)
- [x] Responsivity
- Implement add more feature
    - [x] If the user clicks in the tag add more, than a input should be displayed and when the user hits enter, or click in the check icon it became a regular tag (no integration with back end)
- [x] Validate if the user entered only valid characters in the first screen
- [ ] Loading state and lazy loading
- [ ] Error handling
- [x] Empty state
- [x] Showing your work through your Git commit history.
