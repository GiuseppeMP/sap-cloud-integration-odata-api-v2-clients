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
import type { IntegrationPackagesApi } from './IntegrationPackagesApi';
import {
  IntegrationDesigntimeArtifacts,
  IntegrationDesigntimeArtifactsType
} from './IntegrationDesigntimeArtifacts';
import {
  ValueMappingDesigntimeArtifacts,
  ValueMappingDesigntimeArtifactsType
} from './ValueMappingDesigntimeArtifacts';
import {
  MessageMappingDesigntimeArtifacts,
  MessageMappingDesigntimeArtifactsType
} from './MessageMappingDesigntimeArtifacts';
import { CustomTags, CustomTagsType } from './CustomTags';

/**
 * This class represents the entity "IntegrationPackages" of service "com.sap.hci.api".
 */
export class IntegrationPackages<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IntegrationPackagesType<T>
{
  /**
   * Technical entity name for IntegrationPackages.
   */
  static override _entityName = 'IntegrationPackages';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IntegrationPackages entity.
   */
  static _keys = ['Id'];
  /**
   * Id.
   */
  declare id: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   * @nullable
   */
  declare name?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Short Text.
   * @nullable
   */
  declare shortText?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * @nullable
   */
  declare version?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Vendor.
   * @nullable
   */
  declare vendor?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mode.
   * @nullable
   */
  declare mode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Supported Platform.
   * @nullable
   */
  declare supportedPlatform?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Modified By.
   * @nullable
   */
  declare modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Creation Date.
   * @nullable
   */
  declare creationDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Modified Date.
   * @nullable
   */
  declare modifiedDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Created By.
   * @nullable
   */
  declare createdBy?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Products.
   * @nullable
   */
  declare products?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Keywords.
   * @nullable
   */
  declare keywords?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Countries.
   * @nullable
   */
  declare countries?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Industries.
   * @nullable
   */
  declare industries?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Of Business.
   * @nullable
   */
  declare lineOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link IntegrationDesigntimeArtifacts} entity.
   */
  declare integrationDesigntimeArtifacts: IntegrationDesigntimeArtifacts<T>[];
  /**
   * One-to-many navigation property to the {@link ValueMappingDesigntimeArtifacts} entity.
   */
  declare valueMappingDesigntimeArtifacts: ValueMappingDesigntimeArtifacts<T>[];
  /**
   * One-to-many navigation property to the {@link MessageMappingDesigntimeArtifacts} entity.
   */
  declare messageMappingDesigntimeArtifacts: MessageMappingDesigntimeArtifacts<T>[];
  /**
   * One-to-many navigation property to the {@link CustomTags} entity.
   */
  declare customTags: CustomTags<T>[];

  constructor(_entityApi: IntegrationPackagesApi<T>) {
    super(_entityApi);
  }
}

export interface IntegrationPackagesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  id: DeserializedType<T, 'Edm.String'>;
  name?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  shortText?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  vendor?: DeserializedType<T, 'Edm.String'> | null;
  mode?: DeserializedType<T, 'Edm.String'> | null;
  supportedPlatform?: DeserializedType<T, 'Edm.String'> | null;
  modifiedBy?: DeserializedType<T, 'Edm.String'> | null;
  creationDate?: DeserializedType<T, 'Edm.String'> | null;
  modifiedDate?: DeserializedType<T, 'Edm.String'> | null;
  createdBy?: DeserializedType<T, 'Edm.String'> | null;
  products?: DeserializedType<T, 'Edm.String'> | null;
  keywords?: DeserializedType<T, 'Edm.String'> | null;
  countries?: DeserializedType<T, 'Edm.String'> | null;
  industries?: DeserializedType<T, 'Edm.String'> | null;
  lineOfBusiness?: DeserializedType<T, 'Edm.String'> | null;
  integrationDesigntimeArtifacts: IntegrationDesigntimeArtifactsType<T>[];
  valueMappingDesigntimeArtifacts: ValueMappingDesigntimeArtifactsType<T>[];
  messageMappingDesigntimeArtifacts: MessageMappingDesigntimeArtifactsType<T>[];
  customTags: CustomTagsType<T>[];
}
