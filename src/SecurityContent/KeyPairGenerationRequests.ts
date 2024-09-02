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
import type { KeyPairGenerationRequestsApi } from './KeyPairGenerationRequestsApi';

/**
 * This class represents the entity "KeyPairGenerationRequests" of service "com.sap.hci.api".
 */
export class KeyPairGenerationRequests<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements KeyPairGenerationRequestsType<T>
{
  /**
   * Technical entity name for KeyPairGenerationRequests.
   */
  static override _entityName = 'KeyPairGenerationRequests';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the KeyPairGenerationRequests entity.
   */
  static _keys = [];
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

  constructor(_entityApi: KeyPairGenerationRequestsApi<T>) {
    super(_entityApi);
  }
}

export interface KeyPairGenerationRequestsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  keyAlgorithmParameter?: DeserializedType<T, 'Edm.String'> | null;
  commonName?: DeserializedType<T, 'Edm.String'> | null;
  organizationUnit?: DeserializedType<T, 'Edm.String'> | null;
  organization?: DeserializedType<T, 'Edm.String'> | null;
  locality?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
  country?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
}
