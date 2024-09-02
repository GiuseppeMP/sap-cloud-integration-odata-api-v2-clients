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
import type { ValueMappingDesigntimeArtifactsApi } from './ValueMappingDesigntimeArtifactsApi';
import { ValMapSchema, ValMapSchemaType } from './ValMapSchema';

/**
 * This class represents the entity "ValueMappingDesigntimeArtifacts" of service "com.sap.hci.api".
 */
export class ValueMappingDesigntimeArtifacts<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements ValueMappingDesigntimeArtifactsType<T>
{
  /**
   * Technical entity name for ValueMappingDesigntimeArtifacts.
   */
  static override _entityName = 'ValueMappingDesigntimeArtifacts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the ValueMappingDesigntimeArtifacts entity.
   */
  static _keys = ['Id', 'Version'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Version.
   */
  declare version: DeserializedType<T, 'Edm.String'>;
  /**
   * Package Id.
   */
  declare packageId: DeserializedType<T, 'Edm.String'>;
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
   * Artifact Content.
   * @nullable
   */
  declare artifactContent?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * One-to-many navigation property to the {@link ValMapSchema} entity.
   */
  declare valMapSchema: ValMapSchema<T>[];

  constructor(_entityApi: ValueMappingDesigntimeArtifactsApi<T>) {
    super(_entityApi);
  }
}

export interface ValueMappingDesigntimeArtifactsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  version: DeserializedType<T, 'Edm.String'>;
  packageId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  artifactContent?: DeserializedType<T, 'Edm.Binary'> | null;
  valMapSchema: ValMapSchemaType<T>[];
}
