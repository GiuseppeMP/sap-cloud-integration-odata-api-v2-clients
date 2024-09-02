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
import type { StringParametersApi } from './StringParametersApi';

/**
 * This class represents the entity "StringParameters" of service "com.sap.hci.api".
 */
export class StringParameters<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements StringParametersType<T>
{
  /**
   * Technical entity name for StringParameters.
   */
  static override _entityName = 'StringParameters';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the StringParameters entity.
   */
  static _keys = [];
  /**
   * Value.
   * Maximum length: 4000.
   */
  declare value: DeserializedType<T, 'Edm.String'>;

  constructor(_entityApi: StringParametersApi<T>) {
    super(_entityApi);
  }
}

export interface StringParametersType<
  T extends DeSerializers = DefaultDeSerializers
> {
  value: DeserializedType<T, 'Edm.String'>;
}
