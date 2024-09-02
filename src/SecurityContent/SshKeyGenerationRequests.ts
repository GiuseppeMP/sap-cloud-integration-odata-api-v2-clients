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
import type { SshKeyGenerationRequestsApi } from './SshKeyGenerationRequestsApi';

/**
 * This class represents the entity "SSHKeyGenerationRequests" of service "com.sap.hci.api".
 */
export class SshKeyGenerationRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements SshKeyGenerationRequestsType<T>
{
  /**
   * Technical entity name for SshKeyGenerationRequests.
   */
  static override _entityName = 'SSHKeyGenerationRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the SshKeyGenerationRequests entity.
   */
  static _keys = [];
  /**
   * Ssh File.
   * Maximum length: 10000.
   * @nullable
   */
  declare sshFile?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Password.
   * Maximum length: 500.
   * @nullable
   */
  declare password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Key Algorithm Parameter.
   * Maximum length: 500.
   * @nullable
   */
  declare keyAlgorithmParameter?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Common Name.
   * Maximum length: 500.
   * @nullable
   */
  declare commonName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization Unit.
   * Maximum length: 500.
   * @nullable
   */
  declare organizationUnit?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Organization.
   * Maximum length: 500.
   * @nullable
   */
  declare organization?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Locality.
   * Maximum length: 500.
   * @nullable
   */
  declare locality?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * Maximum length: 500.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country.
   * Maximum length: 2.
   * @nullable
   */
  declare country?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * Maximum length: 500.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: SshKeyGenerationRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface SshKeyGenerationRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  sshFile?: DeserializedType<T, 'Edm.String'> | null;
  password?: DeserializedType<T, 'Edm.String'> | null;
  keyAlgorithmParameter?: DeserializedType<T, 'Edm.String'> | null;
  commonName?: DeserializedType<T, 'Edm.String'> | null;
  organizationUnit?: DeserializedType<T, 'Edm.String'> | null;
  organization?: DeserializedType<T, 'Edm.String'> | null;
  locality?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
}
