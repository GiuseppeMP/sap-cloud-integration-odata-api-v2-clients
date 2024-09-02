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
import type { AuthorizedUsersApi } from './AuthorizedUsersApi';

/**
 * This class represents the entity "AuthorizedUsers" of service "com.sap.hci.api".
 */
export class AuthorizedUsers<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AuthorizedUsersType<T>
{
  /**
   * Technical entity name for AuthorizedUsers.
   */
  static override _entityName = 'AuthorizedUsers';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AuthorizedUsers entity.
   */
  static _keys = ['User'];
  /**
   * User.
   * Maximum length: 150.
   */
  declare user: DeserializedType<T, 'Edm.String'>;
  /**
   * Pid.
   * Maximum length: 60.
   */
  declare pid: DeserializedType<T, 'Edm.String'>;
  /**
   * Last Modified By.
   * Maximum length: 150.
   * @nullable
   */
  declare lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Modified Time.
   * @nullable
   */
  declare lastModifiedTime?: DeserializedType<T, 'Edm.DateTime'> | null;
  /**
   * Created By.
   * Maximum length: 150.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created Time.
   * @nullable
   */
  declare createdTime?: DeserializedType<T, 'Edm.DateTime'> | null;

  constructor(_entityApi: AuthorizedUsersApi<T>) {
    super(_entityApi);
  }
}

export interface AuthorizedUsersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  user: DeserializedType<T, 'Edm.String'>;
  pid: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedTime?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdTime?: DeserializedType<T, 'Edm.DateTime'> | null;
}
