/**
 * @jest-environment jsdom
 */

import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import Studio from '../../src/pages/Studio';


test('Loads All Buttons correctly', () => {

  // render(<Studio />);

  // expect(screen.getAllByRole('download')).toHaveTextContent('Download');

});












// import '@testing-library/jest-dom';
// import Studio from '../../src/pages/Studio';
// import { render, screen, fireEvent } from '../test-utils';
// import { PostsProvider } from '../../src/contexts/PostsContext';
// import { UserInfoProvider } from '../../src/contexts/UserContext';


// //Mocked log in
// jest.mock('@auth0/auth0-react', () => ({
//   Auth0Provider: ({ children }) => children,
//   withAuthenticationRequired: ((component, _) => component),
//   useAuth0: () => {
//     return {
//       isLoading: false,
//       user: { sub: "foobar" },
//       isAuthenticated: true,
//       loginWithRedirect: jest.fn()
//     };
//   }
// }));

// const MockStudio = () => {

//   return (
//     <UserInfoProvider>
//       <PostsProvider>
//         <Studio />
//       </PostsProvider >
//     </UserInfoProvider>
//   );
// };


// test('Studio should exist', () => {

//   render(<MockStudio />);
//   expect(screen.getByText(/Audio Creation Tool/i)).toBeInTheDocument();

// });