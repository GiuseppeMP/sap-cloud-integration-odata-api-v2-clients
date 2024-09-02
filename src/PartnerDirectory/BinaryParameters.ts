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
import type { BinaryParametersApi } from './BinaryParametersApi';

/**
 * This class represents the entity "BinaryParameters" of service "com.sap.hci.api".
 */
export class BinaryParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements BinaryParametersType<T>
{
  /**
   * Technical entity name for BinaryParameters.
   */
  static override _entityName = 'BinaryParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the BinaryParameters entity.
   */
  static _keys = [];
  /**
   * Content Type.
   * Maximum length: 300.
   */
  declare contentType: DeserializedType<T, 'Edm.String'>;
  /**
   * Value.
   * Maximum length: 262144.
   */
  declare value: DeserializedType<T, 'Edm.Binary'>;

  constructor(_entityApi: BinaryParametersApi<T>) {
    super(_entityApi);
  }
}

export interface BinaryParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  contentType: DeserializedType<T, 'Edm.String'>;
  value: DeserializedType<T, 'Edm.Binary'>;
}
