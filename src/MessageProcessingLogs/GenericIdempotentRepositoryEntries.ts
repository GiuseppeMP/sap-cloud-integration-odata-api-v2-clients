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
import type { GenericIdempotentRepositoryEntriesApi } from './GenericIdempotentRepositoryEntriesApi';

/**
 * This class represents the entity "GenericIdempotentRepositoryEntries" of service "com.sap.hci.api".
 */
export class GenericIdempotentRepositoryEntries<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements GenericIdempotentRepositoryEntriesType<T>
{
  /**
   * Technical entity name for GenericIdempotentRepositoryEntries.
   */
  static override _entityName = 'GenericIdempotentRepositoryEntries';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the GenericIdempotentRepositoryEntries entity.
   */
  static _keys = ['HexVendor', 'HexSource', 'HexEntry', 'HexComponent'];
  /**
   * Hex Vendor.
   */
  declare hexVendor: DeserializedType<T, 'Edm.String'>;
  /**
   * Hex Source.
   */
  declare hexSource: DeserializedType<T, 'Edm.String'>;
  /**
   * Hex Entry.
   */
  declare hexEntry: DeserializedType<T, 'Edm.String'>;
  /**
   * Hex Component.
   */
  declare hexComponent: DeserializedType<T, 'Edm.String'>;
  /**
   * Source.
   * @nullable
   */
  declare source?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Entry.
   * @nullable
   */
  declare entry?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Component.
   * @nullable
   */
  declare component?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor.
   * @nullable
   */
  declare vendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Time.
   * @nullable
   */
  declare creationTime?: DeserializedType<T, 'Edm.Int64'> | null;
  /**
   * Expiration Time.
   * @nullable
   */
  declare expirationTime?: DeserializedType<T, 'Edm.Int64'> | null;

  constructor(_entityApi: GenericIdempotentRepositoryEntriesApi<T>) {
    super(_entityApi);
  }
}

export interface GenericIdempotentRepositoryEntriesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  hexVendor: DeserializedType<T, 'Edm.String'>;
  hexSource: DeserializedType<T, 'Edm.String'>;
  hexEntry: DeserializedType<T, 'Edm.String'>;
  hexComponent: DeserializedType<T, 'Edm.String'>;
  source?: DeserializedType<T, 'Edm.String'> | null;
  entry?: DeserializedType<T, 'Edm.String'> | null;
  component?: DeserializedType<T, 'Edm.String'> | null;
  vendor?: DeserializedType<T, 'Edm.String'> | null;
  creationTime?: DeserializedType<T, 'Edm.Int64'> | null;
  expirationTime?: DeserializedType<T, 'Edm.Int64'> | null;
}
