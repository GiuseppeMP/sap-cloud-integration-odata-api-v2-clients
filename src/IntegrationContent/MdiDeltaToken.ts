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
import type { MdiDeltaTokenApi } from './MdiDeltaTokenApi';

/**
 * This class represents the entity "MDIDeltaToken" of service "com.sap.hci.api".
 */
export class MdiDeltaToken<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements MdiDeltaTokenType<T>
{
  /**
   * Technical entity name for MdiDeltaToken.
   */
  static override _entityName = 'MDIDeltaToken';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the MdiDeltaToken entity.
   */
  static _keys = ['Operation', 'Entity', 'Version'];
  /**
   * Operation.
   */
  declare operation: DeserializedType<T, 'Edm.String'>;
  /**
   * Entity.
   */
  declare entity: DeserializedType<T, 'Edm.String'>;
  /**
   * Version.
   */
  declare version: DeserializedType<T, 'Edm.String'>;
  /**
   * Delta Token.
   * @nullable
   */
  declare deltaToken?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Last Update Timestamp.
   * @nullable
   */
  declare lastUpdateTimestamp?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: MdiDeltaTokenApi<T>) {
    super(_entityApi);
  }
}

export interface MdiDeltaTokenType<
  T extends DeSerializers = DefaultDeSerializers
> {
  operation: DeserializedType<T, 'Edm.String'>;
  entity: DeserializedType<T, 'Edm.String'>;
  version: DeserializedType<T, 'Edm.String'>;
  deltaToken?: DeserializedType<T, 'Edm.String'> | null;
  lastUpdateTimestamp?: DeserializedType<T, 'Edm.String'> | null;
}
