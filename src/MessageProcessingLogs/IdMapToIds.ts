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
import type { IdMapToIdsApi } from './IdMapToIdsApi';
import { IdMapFromIds, IdMapFromIdsType } from './IdMapFromIds';
import { IdMapFromId2S, IdMapFromId2SType } from './IdMapFromId2S';

/**
 * This class represents the entity "IdMapToIds" of service "com.sap.hci.api".
 */
export class IdMapToIds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IdMapToIdsType<T>
{
  /**
   * Technical entity name for IdMapToIds.
   */
  static override _entityName = 'IdMapToIds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IdMapToIds entity.
   */
  static _keys = ['ToId'];
  /**
   * To Id.
   */
  declare toId: DeserializedType<T, 'Edm.String'>;
  /**
   * From Id.
   * @nullable
   */
  declare fromId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mapper.
   * @nullable
   */
  declare mapper?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiration Time.
   * @nullable
   */
  declare expirationTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  /**
   * One-to-one navigation property to the {@link IdMapFromIds} entity.
   */
  declare fromId_1?: IdMapFromIds<T> | null;
  /**
   * One-to-many navigation property to the {@link IdMapFromId2S} entity.
   */
  declare fromId2S: IdMapFromId2S<T>[];

  constructor(_entityApi: IdMapToIdsApi<T>) {
    super(_entityApi);
  }
}

export interface IdMapToIdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  toId: DeserializedType<T, 'Edm.String'>;
  fromId?: DeserializedType<T, 'Edm.String'> | null;
  mapper?: DeserializedType<T, 'Edm.String'> | null;
  expirationTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  fromId_1?: IdMapFromIdsType<T> | null;
  fromId2S: IdMapFromId2SType<T>[];
}
