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
import type { IdMapFromId2SApi } from './IdMapFromId2SApi';
import { IdMapToIds, IdMapToIdsType } from './IdMapToIds';

/**
 * This class represents the entity "IdMapFromId2s" of service "com.sap.hci.api".
 */
export class IdMapFromId2S<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IdMapFromId2SType<T>
{
  /**
   * Technical entity name for IdMapFromId2S.
   */
  static override _entityName = 'IdMapFromId2s';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IdMapFromId2S entity.
   */
  static _keys = ['FromId'];
  /**
   * From Id.
   */
  declare fromId: DeserializedType<T, 'Edm.String'>;
  /**
   * To Id 2.
   * @nullable
   */
  declare toId2?: DeserializedType<T, 'Edm.String'> | null;
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
   * One-to-one navigation property to the {@link IdMapToIds} entity.
   */
  declare toId?: IdMapToIds<T> | null;

  constructor(_entityApi: IdMapFromId2SApi<T>) {
    super(_entityApi);
  }
}

export interface IdMapFromId2SType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fromId: DeserializedType<T, 'Edm.String'>;
  toId2?: DeserializedType<T, 'Edm.String'> | null;
  mapper?: DeserializedType<T, 'Edm.String'> | null;
  expirationTime?: DeserializedType<T, 'Edm.DateTimeOffset'> | null;
  toId?: IdMapToIdsType<T> | null;
}
