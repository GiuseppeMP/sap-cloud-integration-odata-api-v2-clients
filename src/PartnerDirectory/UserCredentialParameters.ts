/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import type { UserCredentialParametersApi } from './UserCredentialParametersApi';

/**
 * This class represents the entity "UserCredentialParameters" of service "com.sap.hci.api".
 */
export class UserCredentialParameters<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements UserCredentialParametersType<T>
{
  /**
   * Technical entity name for UserCredentialParameters.
   */
  static override _entityName = 'UserCredentialParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UserCredentialParameters entity.
   */
  static _keys = [];
  /**
   * User.
   * Maximum length: 200.
   */
  declare user: DeserializedType<T, 'Edm.String'>;
  /**
   * Password.
   * Maximum length: 200.
   * @nullable
   */
  declare password?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: UserCredentialParametersApi<T>) {
    super(_entityApi);
  }
}

export interface UserCredentialParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  user: DeserializedType<T, 'Edm.String'>;
  password?: DeserializedType<T, 'Edm.String'> | null;
}
