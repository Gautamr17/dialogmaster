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

const ClassificationResult = require('../../src/nlus/classification-result');
const SdkError = require('../../src/errors/sdk-error');

describe('Intent', () => {
  test('to throw error if type is missing', () => {
    expect(() => new ClassificationResult({ name: 'test' })).toThrowError(SdkError);
  });

  test('QnA intent have correct nama', () => {
    const intent = new ClassificationResult({
      label: 'Delivery',
      type: ClassificationResult.TYPE_QNA,
    });
    expect(intent.name).toEqual('qnas');
  });
});
