import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  useUser,
  RedirectToSignIn,
} from "@clerk/clerk-react";

const clerk_pub_key = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    // Wrap your entire app with ClerkProvider
    <ClerkProvider publishableKey={clerk_pub_key}>
      <SignedIn>
        <Hello />
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

function Hello() {
  // Get the user's first name
  const { user } = useUser();

  return (
    <div className="App-header">
      {/* Mount the UserButton component */}
      <UserButton />
      {user ? <h1>Hello, {user.firstName}!</h1> : null}
    </div>
  );
}

export default App;
