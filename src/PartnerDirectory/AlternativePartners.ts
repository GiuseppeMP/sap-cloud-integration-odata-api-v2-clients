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
import type { AlternativePartnersApi } from './AlternativePartnersApi';

/**
 * This class represents the entity "AlternativePartners" of service "com.sap.hci.api".
 */
export class AlternativePartners<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements AlternativePartnersType<T>
{
  /**
   * Technical entity name for AlternativePartners.
   */
  static override _entityName = 'AlternativePartners';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AlternativePartners entity.
   */
  static _keys = ['Hexagency', 'Hexscheme', 'Hexid'];
  /**
   * Hexagency.
   * Maximum length: 480.
   */
  declare hexagency: DeserializedType<T, 'Edm.String'>;
  /**
   * Hexscheme.
   * Maximum length: 480.
   */
  declare hexscheme: DeserializedType<T, 'Edm.String'>;
  /**
   * Hexid.
   * Maximum length: 240.
   */
  declare hexid: DeserializedType<T, 'Edm.String'>;
  /**
   * Agency.
   * Maximum length: 120.
   */
  declare agency: DeserializedType<T, 'Edm.String'>;
  /**
   * Scheme.
   * Maximum length: 120.
   */
  declare scheme: DeserializedType<T, 'Edm.String'>;
  /**
   * Id.
   * Maximum length: 60.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
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

  constructor(_entityApi: AlternativePartnersApi<T>) {
    super(_entityApi);
  }
}

export interface AlternativePartnersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hexagency: DeserializedType<T, 'Edm.String'>;
  hexscheme: DeserializedType<T, 'Edm.String'>;
  hexid: DeserializedType<T, 'Edm.String'>;
  agency: DeserializedType<T, 'Edm.String'>;
  scheme: DeserializedType<T, 'Edm.String'>;
  id: DeserializedType<T, 'Edm.String'>;
  pid: DeserializedType<T, 'Edm.String'>;
  lastModifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  lastModifiedTime?: DeserializedType<T, 'Edm.DateTime'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  createdTime?: DeserializedType<T, 'Edm.DateTime'> | null;
}
