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
import type { EntryPointsApi } from './EntryPointsApi';

/**
 * This class represents the entity "EntryPoints" of service "com.sap.hci.api".
 */
export class EntryPoints<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements EntryPointsType<T>
{
  /**
   * Technical entity name for EntryPoints.
   */
  static override _entityName = 'EntryPoints';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the EntryPoints entity.
   */
  static _keys = ['Url'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Url.
   */
  declare url: DeserializedType<T, 'Edm.String'>;
  /**
   * Type.
   * @nullable
   */
  declare type?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Additional Information.
   * @nullable
   */
  declare additionalInformation?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: EntryPointsApi<T>) {
    super(_entityApi);
  }
}

export interface EntryPointsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  url: DeserializedType<T, 'Edm.String'>;
  type?: DeserializedType<T, 'Edm.String'> | null;
  additionalInformation?: DeserializedType<T, 'Edm.String'> | null;
}
