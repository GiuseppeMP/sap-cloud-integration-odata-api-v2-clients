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
import type { IdMapFromIdsApi } from './IdMapFromIdsApi';
import { IdMapToIds, IdMapToIdsType } from './IdMapToIds';

/**
 * This class represents the entity "IdMapFromIds" of service "com.sap.hci.api".
 */
export class IdMapFromIds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IdMapFromIdsType<T>
{
  /**
   * Technical entity name for IdMapFromIds.
   */
  static override _entityName = 'IdMapFromIds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IdMapFromIds entity.
   */
  static _keys = ['FromId'];
  /**
   * From Id.
   */
  declare fromId: DeserializedType<T, 'Edm.String'>;
  /**
   * One-to-many navigation property to the {@link IdMapToIds} entity.
   */
  declare toIds: IdMapToIds<T>[];

  constructor(_entityApi: IdMapFromIdsApi<T>) {
    super(_entityApi);
  }
}

export interface IdMapFromIdsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  fromId: DeserializedType<T, 'Edm.String'>;
  toIds: IdMapToIdsType<T>[];
}
