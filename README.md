# Journal app

## Elis Antonio Pérez

### React JS, Web

### Sass
- Styles.
- journal.scss
- Component when nothing is selected.
- NoteAppBar
- HomeScreen structure and design.

### Redux
- Settings store, auth reducer, types, Provider in JournalApp.
- First dispatch of an action to our Store.
- Use our useForm.js
- auth action login and logout.
- Thunk Middleware for Asynchronous actions

### Forms
- User registration form.
- Form error handling.
- Implementing the "validator" library to validate the form fields.
- validator.isEmail returns boolean.
- the !validator.isEmail is used with the exclamation mark.

### Redux part 2:
- uiReducer and Actions.
- Step 1: Create a Reducer "uiReducer.js"
- Step 2: ui.js
- dispatch
- useSelector
 - Get information from state.

### Firebase
- Firebase initial setup.
- Created a new project in the Firebase Console.

### Registration
- The registration options by email and Google were enabled.
- Installed Firebase v8.10.0 using npm command.
- Configure Firebase and Google Sign-in.
- User registration in Firebase with Email and Password.

### Login
- Perform user login with Email and Password.
 - Firebase signInWithEmailAndPassword

### Loading state
- when clicking the login button, it is disabled while waiting for the response from the server.
- Keep authentication state on reload.
- Show a global loading in the application.

### Logout
- Logout of Firebase.

### Private and Public routes.
- Route protection.

### Error message.
- SweetAlert2 was installed for error messages.

### Name on Sidebar.js
- useSelector state.auth.name

### NotesReducer.
- The new reducer "notesReducer.js" was created.
- Charged the JournalScreen component.
- Fetched the state of the "active" property from the Store with the useSelector.

### Create a new Note.
- New types for notes were created.
- Created "notes" action and saved collection to Firestore with db.

### Show notes
- The notes in the JournalEntry component were displayed.
- "dayjs" was used to format the date.
 - Also used "AdvancedFormat" plugin for "Do" format.

 ### Edit notes.
 - Activate a note for editing.
 - Change the active note by changing the selection.

 ### Update Notes to Firestore.
 - Created new action startSaveNote.

 ### Refresh sidebar with update note.
 - SweetAlert2 was used to inform the user that their note has been updated.

### Cloudinary
- Cloudinary account was created
- An upload preset was added.

### Postman Data for Cloudinary:
- https://api.cloudinary.com/v1_1/:cloud_name/:action
- cloud_name: "personal-cloudName"
- action: "upload" OR "delete"
- file, type: file
- upload_preset: "personal-upload_preset"

### Ending.
- We remove the note.
- We add animations.
- We clean the notes on logout.

### Testing
- Testing in reducers.
- Testing in actions.
 - Testing in notes.test.js
 - Add try/catch in notes.js
 - Testing in auth.test.js

### .ENV
- Create environment variables for firebase configurations.

#### Commit

- Type: Feat, Fix, Refactor, Test.
- Scope.
- Subject.