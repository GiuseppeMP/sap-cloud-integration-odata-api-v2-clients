/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  edmToTs,
  transformReturnValueForEntity,
  transformReturnValueForEdmType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v2';
import { integrationContent } from './service';
import { IntegrationDesigntimeArtifacts } from './IntegrationDesigntimeArtifacts';
import { IntegrationDesigntimeArtifactsApi } from './IntegrationDesigntimeArtifactsApi';
import { IntegrationPackages } from './IntegrationPackages';
import { IntegrationPackagesApi } from './IntegrationPackagesApi';
import { ValueMappingDesigntimeArtifacts } from './ValueMappingDesigntimeArtifacts';
import { ValueMappingDesigntimeArtifactsApi } from './ValueMappingDesigntimeArtifactsApi';
import { ValMaps } from './ValMaps';
import { ValMapsApi } from './ValMapsApi';
import { DefaultValMaps } from './DefaultValMaps';
import { DefaultValMapsApi } from './DefaultValMapsApi';
import { IntegrationAdapterDesigntimeArtifacts } from './IntegrationAdapterDesigntimeArtifacts';
import { IntegrationAdapterDesigntimeArtifactsApi } from './IntegrationAdapterDesigntimeArtifactsApi';
import { MessageMappingDesigntimeArtifacts } from './MessageMappingDesigntimeArtifacts';
import { MessageMappingDesigntimeArtifactsApi } from './MessageMappingDesigntimeArtifactsApi';
import { ScriptCollectionDesigntimeArtifacts } from './ScriptCollectionDesigntimeArtifacts';
import { ScriptCollectionDesigntimeArtifactsApi } from './ScriptCollectionDesigntimeArtifactsApi';

/**
 * Type of the parameters to be passed to {@link deployIntegrationDesigntimeArtifact}.
 */
export interface DeployIntegrationDesigntimeArtifactParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Version.
   */
  version: string;
}

/**
 * Deploy Integration Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deployIntegrationDesigntimeArtifact<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeployIntegrationDesigntimeArtifactParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeployIntegrationDesigntimeArtifactParameters<DeSerializersT>,
  IntegrationDesigntimeArtifacts
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    version: new OperationParameter('Version', 'Edm.String', parameters.version)
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'DeployIntegrationDesigntimeArtifact',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).integrationDesigntimeArtifactsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link integrationDesigntimeArtifactSaveAsVersion}.
 */
export interface IntegrationDesigntimeArtifactSaveAsVersionParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Save As Version.
   */
  saveAsVersion: string;
}

/**
 * Integration Designtime Artifact Save As Version.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function integrationDesigntimeArtifactSaveAsVersion<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: IntegrationDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  IntegrationDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
  IntegrationDesigntimeArtifacts
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    saveAsVersion: new OperationParameter(
      'SaveAsVersion',
      'Edm.String',
      parameters.saveAsVersion
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'IntegrationDesigntimeArtifactSaveAsVersion',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).integrationDesigntimeArtifactsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link copyIntegrationPackage}.
 */
export interface CopyIntegrationPackageParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Import Mode.
   */
  importMode?: string | null;
  /**
   * Suffix.
   */
  suffix?: string | null;
}

/**
 * Copy Integration Package.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function copyIntegrationPackage<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CopyIntegrationPackageParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  CopyIntegrationPackageParameters<DeSerializersT>,
  IntegrationPackages
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    importMode: new OperationParameter(
      'ImportMode',
      'Edm.String',
      parameters.importMode
    ),
    suffix: new OperationParameter('Suffix', 'Edm.String', parameters.suffix)
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'CopyIntegrationPackage',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).integrationPackagesApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deployValueMappingDesigntimeArtifact}.
 */
export interface DeployValueMappingDesigntimeArtifactParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Version.
   */
  version: string;
}

/**
 * Deploy Value Mapping Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deployValueMappingDesigntimeArtifact<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeployValueMappingDesigntimeArtifactParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeployValueMappingDesigntimeArtifactParameters<DeSerializersT>,
  ValueMappingDesigntimeArtifacts
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    version: new OperationParameter('Version', 'Edm.String', parameters.version)
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'DeployValueMappingDesigntimeArtifact',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).valueMappingDesigntimeArtifactsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link valueMappingDesigntimeArtifactSaveAsVersion}.
 */
export interface ValueMappingDesigntimeArtifactSaveAsVersionParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Save As Version.
   */
  saveAsVersion: string;
}

/**
 * Value Mapping Designtime Artifact Save As Version.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function valueMappingDesigntimeArtifactSaveAsVersion<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ValueMappingDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  ValueMappingDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
  ValueMappingDesigntimeArtifacts
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    saveAsVersion: new OperationParameter(
      'SaveAsVersion',
      'Edm.String',
      parameters.saveAsVersion
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'ValueMappingDesigntimeArtifactSaveAsVersion',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).valueMappingDesigntimeArtifactsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link upsertValMaps}.
 */
export interface UpsertValMapsParameters<DeSerializersT extends DeSerializers> {
  /**
   * Id.
   */
  id: string;
  /**
   * Version.
   */
  version: string;
  /**
   * Src Agency.
   */
  srcAgency: string;
  /**
   * Src Id.
   */
  srcId: string;
  /**
   * Tgt Agency.
   */
  tgtAgency: string;
  /**
   * Tgt Id.
   */
  tgtId: string;
  /**
   * Val Map Id.
   */
  valMapId?: string | null;
  /**
   * Src Value.
   */
  srcValue: string;
  /**
   * Tgt Value.
   */
  tgtValue: string;
  /**
   * Is Configured.
   */
  isConfigured: boolean;
}

/**
 * Upsert Val Maps.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function upsertValMaps<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UpsertValMapsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  UpsertValMapsParameters<DeSerializersT>,
  ValMaps
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    version: new OperationParameter(
      'Version',
      'Edm.String',
      parameters.version
    ),
    srcAgency: new OperationParameter(
      'SrcAgency',
      'Edm.String',
      parameters.srcAgency
    ),
    srcId: new OperationParameter('SrcId', 'Edm.String', parameters.srcId),
    tgtAgency: new OperationParameter(
      'TgtAgency',
      'Edm.String',
      parameters.tgtAgency
    ),
    tgtId: new OperationParameter('TgtId', 'Edm.String', parameters.tgtId),
    valMapId: new OperationParameter(
      'ValMapId',
      'Edm.String',
      parameters.valMapId
    ),
    srcValue: new OperationParameter(
      'SrcValue',
      'Edm.String',
      parameters.srcValue
    ),
    tgtValue: new OperationParameter(
      'TgtValue',
      'Edm.String',
      parameters.tgtValue
    ),
    isConfigured: new OperationParameter(
      'IsConfigured',
      'Edm.Boolean',
      parameters.isConfigured
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'UpsertValMaps',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).valMapsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deleteValMaps}.
 */
export interface DeleteValMapsParameters<DeSerializersT extends DeSerializers> {
  /**
   * Id.
   */
  id: string;
  /**
   * Version.
   */
  version: string;
  /**
   * Src Agency.
   */
  srcAgency: string;
  /**
   * Src Id.
   */
  srcId: string;
  /**
   * Tgt Agency.
   */
  tgtAgency: string;
  /**
   * Tgt Id.
   */
  tgtId: string;
}

/**
 * Delete Val Maps.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deleteValMaps<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeleteValMapsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeleteValMapsParameters<DeSerializersT>,
  string
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    version: new OperationParameter(
      'Version',
      'Edm.String',
      parameters.version
    ),
    srcAgency: new OperationParameter(
      'SrcAgency',
      'Edm.String',
      parameters.srcAgency
    ),
    srcId: new OperationParameter('SrcId', 'Edm.String', parameters.srcId),
    tgtAgency: new OperationParameter(
      'TgtAgency',
      'Edm.String',
      parameters.tgtAgency
    ),
    tgtId: new OperationParameter('TgtId', 'Edm.String', parameters.tgtId)
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'DeleteValMaps',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.DeleteValMaps, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link updateDefaultValMap}.
 */
export interface UpdateDefaultValMapParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Version.
   */
  version: string;
  /**
   * Src Agency.
   */
  srcAgency: string;
  /**
   * Src Id.
   */
  srcId: string;
  /**
   * Tgt Agency.
   */
  tgtAgency: string;
  /**
   * Tgt Id.
   */
  tgtId: string;
  /**
   * Val Map Id.
   */
  valMapId: string;
  /**
   * Is Configured.
   */
  isConfigured: boolean;
}

/**
 * Update Default Val Map.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function updateDefaultValMap<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UpdateDefaultValMapParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  UpdateDefaultValMapParameters<DeSerializersT>,
  DefaultValMaps
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    version: new OperationParameter(
      'Version',
      'Edm.String',
      parameters.version
    ),
    srcAgency: new OperationParameter(
      'SrcAgency',
      'Edm.String',
      parameters.srcAgency
    ),
    srcId: new OperationParameter('SrcId', 'Edm.String', parameters.srcId),
    tgtAgency: new OperationParameter(
      'TgtAgency',
      'Edm.String',
      parameters.tgtAgency
    ),
    tgtId: new OperationParameter('TgtId', 'Edm.String', parameters.tgtId),
    valMapId: new OperationParameter(
      'ValMapId',
      'Edm.String',
      parameters.valMapId
    ),
    isConfigured: new OperationParameter(
      'IsConfigured',
      'Edm.Boolean',
      parameters.isConfigured
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'UpdateDefaultValMap',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).defaultValMapsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deployIntegrationAdapterDesigntimeArtifact}.
 */
export interface DeployIntegrationAdapterDesigntimeArtifactParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
}

/**
 * Deploy Integration Adapter Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deployIntegrationAdapterDesigntimeArtifact<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeployIntegrationAdapterDesigntimeArtifactParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeployIntegrationAdapterDesigntimeArtifactParameters<DeSerializersT>,
  IntegrationAdapterDesigntimeArtifacts
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id)
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'DeployIntegrationAdapterDesigntimeArtifact',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers)
          .integrationAdapterDesigntimeArtifactsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deployMessageMappingDesigntimeArtifact}.
 */
export interface DeployMessageMappingDesigntimeArtifactParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Version.
   */
  version: string;
}

/**
 * Deploy Message Mapping Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deployMessageMappingDesigntimeArtifact<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeployMessageMappingDesigntimeArtifactParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeployMessageMappingDesigntimeArtifactParameters<DeSerializersT>,
  MessageMappingDesigntimeArtifacts
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    version: new OperationParameter('Version', 'Edm.String', parameters.version)
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'DeployMessageMappingDesigntimeArtifact',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).messageMappingDesigntimeArtifactsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link messageMappingDesigntimeArtifactSaveAsVersion}.
 */
export interface MessageMappingDesigntimeArtifactSaveAsVersionParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Save As Version.
   */
  saveAsVersion: string;
}

/**
 * Message Mapping Designtime Artifact Save As Version.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function messageMappingDesigntimeArtifactSaveAsVersion<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: MessageMappingDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  MessageMappingDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>,
  MessageMappingDesigntimeArtifacts
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    saveAsVersion: new OperationParameter(
      'SaveAsVersion',
      'Edm.String',
      parameters.saveAsVersion
    )
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'MessageMappingDesigntimeArtifactSaveAsVersion',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).messageMappingDesigntimeArtifactsApi
      ),
    params,
    deSerializers
  );
}

/**
 * Type of the parameters to be passed to {@link deployScriptCollectionDesigntimeArtifact}.
 */
export interface DeployScriptCollectionDesigntimeArtifactParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Id.
   */
  id: string;
  /**
   * Version.
   */
  version: string;
}

/**
 * Deploy Script Collection Designtime Artifact.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deployScriptCollectionDesigntimeArtifact<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeployScriptCollectionDesigntimeArtifactParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as DeSerializersT
): OperationRequestBuilder<
  DeSerializersT,
  DeployScriptCollectionDesigntimeArtifactParameters<DeSerializersT>,
  ScriptCollectionDesigntimeArtifacts
> {
  const params = {
    id: new OperationParameter('Id', 'Edm.String', parameters.id),
    version: new OperationParameter('Version', 'Edm.String', parameters.version)
  };

  return new OperationRequestBuilder(
    'post',
    '/',
    'DeployScriptCollectionDesigntimeArtifact',
    data =>
      transformReturnValueForEntity(
        data,
        integrationContent(deSerializers).scriptCollectionDesigntimeArtifactsApi
      ),
    params,
    deSerializers
  );
}

export const operations = {
  deployIntegrationDesigntimeArtifact,
  integrationDesigntimeArtifactSaveAsVersion,
  copyIntegrationPackage,
  deployValueMappingDesigntimeArtifact,
  valueMappingDesigntimeArtifactSaveAsVersion,
  upsertValMaps,
  deleteValMaps,
  updateDefaultValMap,
  deployIntegrationAdapterDesigntimeArtifact,
  deployMessageMappingDesigntimeArtifact,
  messageMappingDesigntimeArtifactSaveAsVersion,
  deployScriptCollectionDesigntimeArtifact
};
