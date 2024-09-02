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
import type { ValMapSchemaApi } from './ValMapSchemaApi';
import { ValMaps, ValMapsType } from './ValMaps';
import { DefaultValMaps, DefaultValMapsType } from './DefaultValMaps';

/**
 * This class represents the entity "ValMapSchema" of service "com.sap.hci.api".
 */
export class ValMapSchema<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements ValMapSchemaType<T>
{
  /**
   * Technical entity name for ValMapSchema.
   */
  static override _entityName = 'ValMapSchema';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValMapSchema entity.
   */
  static _keys = ['SrcAgency', 'SrcId', 'TgtAgency', 'TgtId'];
  /**
   * Src Agency.
   */
  declare srcAgency: DeserializedType<T, 'Edm.String'>;
  /**
   * Src Id.
   */
  declare srcId: DeserializedType<T, 'Edm.String'>;
  /**
   * Tgt Agency.
   */
  declare tgtAgency: DeserializedType<T, 'Edm.String'>;
  /**
   * Tgt Id.
   */
  declare tgtId: DeserializedType<T, 'Edm.String'>;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link ValMaps} entity.
   */
  declare valMaps: ValMaps<T>[];
  /**
   * One-to-many navigation property to the {@link DefaultValMaps} entity.
   */
  declare defaultValMaps: DefaultValMaps<T>[];

  constructor(_entityApi: ValMapSchemaApi<T>) {
    super(_entityApi);
  }
}

export interface ValMapSchemaType<
  T extends DeSerializers = DefaultDeSerializers
> {
  srcAgency: DeserializedType<T, 'Edm.String'>;
  srcId: DeserializedType<T, 'Edm.String'>;
  tgtAgency: DeserializedType<T, 'Edm.String'>;
  tgtId: DeserializedType<T, 'Edm.String'>;
  state?: DeserializedType<T, 'Edm.String'> | null;
  valMaps: ValMapsType<T>[];
  defaultValMaps: DefaultValMapsType<T>[];
}
