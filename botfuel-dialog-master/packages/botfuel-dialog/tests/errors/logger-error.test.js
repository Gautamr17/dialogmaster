/**
 * Copyright (c) 2017 - present, Botfuel (https://www.botfuel.io).
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const LoggerError = require('../../src/errors/logger-error');

describe('LoggerError', () => {
  test('should have the correct message when no parameters', async () => {
    const error = new LoggerError({});
    expect(error.message).toEqual('Unknown LoggerError');
    expect(error.logger).toBe(undefined);
  });

  test('should have the correct logger and message when parameters', async () => {
    const error = new LoggerError({ logger: 'invalid', message: 'Error message' });
    expect(error.message).toEqual('Error message');
    expect(error.logger).toBe('invalid');
  });
});
