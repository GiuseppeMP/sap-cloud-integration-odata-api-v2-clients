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
import type { CertificateUserMappingsApi } from './CertificateUserMappingsApi';

/**
 * This class represents the entity "CertificateUserMappings" of service "com.sap.hci.api".
 */
export class CertificateUserMappings<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CertificateUserMappingsType<T>
{
  /**
   * Technical entity name for CertificateUserMappings.
   */
  static override _entityName = 'CertificateUserMappings';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CertificateUserMappings entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   * Maximum length: 32.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * User.
   * Maximum length: 150.
   */
  declare user: DeserializedType<T, 'Edm.String'>;
  /**
   * Certificate.
   * Maximum length: 8192.
   */
  declare certificate: DeserializedType<T, 'Edm.Binary'>;
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
  /**
   * Valid Until.
   * @nullable
   */
  declare validUntil?: DeserializedType<T, 'Edm.Int64'> | null;

  constructor(_entityApi: CertificateUserMappingsApi<T>) {
    super(_entityApi);
  }
}

export interface CertificateUserMappingsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  user: DeserializedType<T, 'Edm.String'>;
  certificate: DeserializedType<T, 'Edm.Binary'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedTime?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdTime?: DeserializedType<T, 'Edm.DateTime'> | null;
  validUntil?: DeserializedType<T, 'Edm.Int64'> | null;
}
