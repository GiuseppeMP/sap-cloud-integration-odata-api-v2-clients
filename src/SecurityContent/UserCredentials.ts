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
import {
  SecurityArtifactDescriptor,
  SecurityArtifactDescriptorField
} from './SecurityArtifactDescriptor';
import type { UserCredentialsApi } from './UserCredentialsApi';

/**
 * This class represents the entity "UserCredentials" of service "com.sap.hci.api".
 */
export class UserCredentials<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements UserCredentialsType<T>
{
  /**
   * Technical entity name for UserCredentials.
   */
  static override _entityName = 'UserCredentials';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the UserCredentials entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Kind.
   * @nullable
   */
  declare kind?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * User.
   * @nullable
   */
  declare user?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Password.
   * @nullable
   */
  declare password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Company Id.
   * @nullable
   */
  declare companyId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Security Artifact Descriptor.
   */
  declare securityArtifactDescriptor: SecurityArtifactDescriptor<T>;

  constructor(_entityApi: UserCredentialsApi<T>) {
    super(_entityApi);
  }
}

export interface UserCredentialsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  kind?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  user?: DeserializedType<T, 'Edm.String'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  companyId?: DeserializedType<T, 'Edm.String'> | null;
  securityArtifactDescriptor: SecurityArtifactDescriptor<T>;
}
