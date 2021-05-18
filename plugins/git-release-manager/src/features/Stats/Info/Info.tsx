/*
 * Copyright 2021 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import { Paper } from '@material-ui/core';

import { InDepth } from './InDepth/InDepth';
import { Summary } from './Summary';

export function Info() {
  return (
    <Paper
      variant="outlined"
      style={{
        padding: 20,
        marginLeft: 25,
        marginRight: 25,
        marginBottom: 25,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Summary />

      <InDepth />
    </Paper>
  );
}
