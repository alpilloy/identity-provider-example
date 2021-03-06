/* eslint-env mocha */
import { expect } from 'chai';
import { authenticate } from '../../services/user-manager';

describe('data/Account', () => {
  describe('authenticate', () => {
    it('should return a user if valid credentials', async () => {
      // Setup
      const login = '3_melaine';
      const password = '123';
      const expectedId = '5b3e1280c1eb6856db7362bb';
      // Action
      const { $oid } = await authenticate(login, password);
      // Assert
      expect($oid).to.equal(expectedId);
    });

    it('should throw an error if invalid login', async () => {
      // Setup
      const login = '3_melai';
      const password = '123';
      const expectedErrorMessage = 'invalid_credentials';
      // Action
      try {
        await authenticate(login, password);

        expect(null).to.equal(expectedErrorMessage);
      } catch (e) {
        // Assert
        expect(e.message).to.equal(expectedErrorMessage);
      }
    });

    it('should throw an error if invalid password', async () => {
      // Setup
      const login = '3_melaine';
      const password = '1234';
      const expectedErrorMessage = 'invalid_credentials';
      // Action
      try {
        await authenticate(login, password);

        expect(null).to.equal(expectedErrorMessage);
      } catch (e) {
        // Assert
        expect(e.message).to.equal(expectedErrorMessage);
      }
    });
  });
});
