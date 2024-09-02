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
import type { PartnersApi } from './PartnersApi';

/**
 * This class represents the entity "Partners" of service "com.sap.hci.api".
 */
export class Partners<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PartnersType<T>
{
  /**
   * Technical entity name for Partners.
   */
  static override _entityName = 'Partners';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Partners entity.
   */
  static _keys = ['Pid'];
  /**
   * Pid.
   * Maximum length: 60.
   */
  declare pid: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: PartnersApi<T>) {
    super(_entityApi);
  }
}

export interface PartnersType<T extends DeSerializers = DefaultDeSerializers> {
  pid: DeserializedType<T, 'Edm.String'>;
}
