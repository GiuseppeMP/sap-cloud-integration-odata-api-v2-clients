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
import type { NumberRangesApi } from './NumberRangesApi';

/**
 * This class represents the entity "NumberRanges" of service "com.sap.hci.api".
 */
export class NumberRanges<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements NumberRangesType<T>
{
  /**
   * Technical entity name for NumberRanges.
   */
  static override _entityName = 'NumberRanges';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the NumberRanges entity.
   */
  static _keys = ['Name'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Max Value.
   * @nullable
   */
  declare maxValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Min Value.
   * @nullable
   */
  declare minValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Rotate.
   * @nullable
   */
  declare rotate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Current Value.
   * @nullable
   */
  declare currentValue?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Field Length.
   * @nullable
   */
  declare fieldLength?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deployed By.
   * @nullable
   */
  declare deployedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Deployed On.
   * @nullable
   */
  declare deployedOn?: DeserializedType<T, 'Edm.DateTime'> | null;

  constructor(_entityApi: NumberRangesApi<T>) {
    super(_entityApi);
  }
}

export interface NumberRangesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  maxValue?: DeserializedType<T, 'Edm.String'> | null;
  minValue?: DeserializedType<T, 'Edm.String'> | null;
  rotate?: DeserializedType<T, 'Edm.String'> | null;
  currentValue?: DeserializedType<T, 'Edm.String'> | null;
  fieldLength?: DeserializedType<T, 'Edm.String'> | null;
  deployedBy?: DeserializedType<T, 'Edm.String'> | null;
  deployedOn?: DeserializedType<T, 'Edm.DateTime'> | null;
}
