/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v2';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  IntegrationDesigntimeArtifacts,
  RuntimeArtifactErrorInformations,
  Configurations,
  Resources,
  IntegrationRuntimeArtifacts_1,
  IntegrationPackages,
  ServiceEndpoints,
  EntryPoints,
  ApiDefinitions,
  ValueMappingDesigntimeArtifacts,
  ValMapSchema,
  ValMaps,
  IntegrationAdapterDesigntimeArtifacts,
  CustomTags,
  CustomTagConfigurations,
  DataStores,
  DataStoreEntries,
  Variables,
  MessageMappingDesigntimeArtifacts,
  IntegrationDesigntimeLocks,
  BuildAndDeployStatus,
  MdiDeltaToken,
  ScriptCollectionDesigntimeArtifacts,
  DefaultValMaps,
  DeployIntegrationDesigntimeArtifactParameters,
  IntegrationDesigntimeArtifactSaveAsVersionParameters,
  CopyIntegrationPackageParameters,
  DeployValueMappingDesigntimeArtifactParameters,
  ValueMappingDesigntimeArtifactSaveAsVersionParameters,
  UpsertValMapsParameters,
  DeleteValMapsParameters,
  UpdateDefaultValMapParameters,
  DeployIntegrationAdapterDesigntimeArtifactParameters,
  DeployMessageMappingDesigntimeArtifactParameters,
  MessageMappingDesigntimeArtifactSaveAsVersionParameters,
  DeployScriptCollectionDesigntimeArtifactParameters
} from './index';

/**
 * Batch builder for operations supported on the IntegrationContent.
 * @param requests The requests of the batch.
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    | ReadIntegrationContentRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    | ReadIntegrationContentRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadIntegrationContentRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        | ReadIntegrationContentRequestBuilder<DeSerializersT>
        | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    | ReadIntegrationContentRequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultIntegrationContentPath,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the IntegrationContent.
 * @param requests The requests of the change set.
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteIntegrationContentRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteIntegrationContentRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteIntegrationContentRequestBuilder<DeSerializersT>
    | Array<WriteIntegrationContentRequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteIntegrationContentRequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultIntegrationContentPath = '/';
export type ReadIntegrationContentRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | GetAllRequestBuilder<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      RuntimeArtifactErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Configurations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<IntegrationPackages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceEndpoints<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EntryPoints<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApiDefinitions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ValueMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ValMapSchema<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ValMaps<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<CustomTags<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      CustomTagConfigurations<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<DataStores<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DataStoreEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Variables<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      IntegrationDesigntimeLocks<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BuildAndDeployStatus<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<MdiDeltaToken<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      ScriptCollectionDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<DefaultValMaps<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      RuntimeArtifactErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Configurations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<IntegrationPackages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ServiceEndpoints<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EntryPoints<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApiDefinitions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ValueMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ValMapSchema<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ValMaps<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<CustomTags<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CustomTagConfigurations<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<DataStores<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DataStoreEntries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Variables<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      IntegrationDesigntimeLocks<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BuildAndDeployStatus<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<MdiDeltaToken<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      ScriptCollectionDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<DefaultValMaps<DeSerializersT>, DeSerializersT>;
export type WriteIntegrationContentRequestBuilder<
  DeSerializersT extends DeSerializers
> =
  | CreateRequestBuilder<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      RuntimeArtifactErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      RuntimeArtifactErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      RuntimeArtifactErrorInformations<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Configurations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Configurations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Configurations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<IntegrationPackages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IntegrationPackages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IntegrationPackages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceEndpoints<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceEndpoints<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceEndpoints<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EntryPoints<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EntryPoints<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EntryPoints<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApiDefinitions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApiDefinitions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApiDefinitions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ValueMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ValueMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ValueMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ValMapSchema<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ValMapSchema<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ValMapSchema<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ValMaps<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ValMaps<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ValMaps<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      IntegrationAdapterDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<CustomTags<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomTags<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomTags<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      CustomTagConfigurations<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CustomTagConfigurations<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CustomTagConfigurations<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<DataStores<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DataStores<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DataStores<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DataStoreEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DataStoreEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DataStoreEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Variables<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Variables<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Variables<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MessageMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      IntegrationDesigntimeLocks<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      IntegrationDesigntimeLocks<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      IntegrationDesigntimeLocks<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BuildAndDeployStatus<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BuildAndDeployStatus<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BuildAndDeployStatus<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<MdiDeltaToken<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MdiDeltaToken<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MdiDeltaToken<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      IntegrationRuntimeArtifacts_1<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      ScriptCollectionDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ScriptCollectionDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ScriptCollectionDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<DefaultValMaps<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DefaultValMaps<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DefaultValMaps<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      DeployIntegrationDesigntimeArtifactParameters<DeSerializersT>,
      IntegrationDesigntimeArtifacts
    >
  | OperationRequestBuilder<
      DeSerializersT,
      IntegrationDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
      IntegrationDesigntimeArtifacts
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CopyIntegrationPackageParameters<DeSerializersT>,
      IntegrationPackages
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeployValueMappingDesigntimeArtifactParameters<DeSerializersT>,
      ValueMappingDesigntimeArtifacts
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ValueMappingDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
      ValueMappingDesigntimeArtifacts
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UpsertValMapsParameters<DeSerializersT>,
      ValMaps
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeleteValMapsParameters<DeSerializersT>,
      string
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UpdateDefaultValMapParameters<DeSerializersT>,
      DefaultValMaps
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeployIntegrationAdapterDesigntimeArtifactParameters<DeSerializersT>,
      IntegrationAdapterDesigntimeArtifacts
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeployMessageMappingDesigntimeArtifactParameters<DeSerializersT>,
      MessageMappingDesigntimeArtifacts
    >
  | OperationRequestBuilder<
      DeSerializersT,
      MessageMappingDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
      MessageMappingDesigntimeArtifacts
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeployScriptCollectionDesigntimeArtifactParameters<DeSerializersT>,
      ScriptCollectionDesigntimeArtifacts
    >;
