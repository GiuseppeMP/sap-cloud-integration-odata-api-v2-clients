/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntegrationDesigntimeArtifactsApi } from './IntegrationDesigntimeArtifactsApi';
import { RuntimeArtifactErrorInformationsApi } from './RuntimeArtifactErrorInformationsApi';
import { ConfigurationsApi } from './ConfigurationsApi';
import { ResourcesApi } from './ResourcesApi';
import { IntegrationRuntimeArtifacts_1Api } from './IntegrationRuntimeArtifacts_1Api';
import { IntegrationPackagesApi } from './IntegrationPackagesApi';
import { ServiceEndpointsApi } from './ServiceEndpointsApi';
import { EntryPointsApi } from './EntryPointsApi';
import { ApiDefinitionsApi } from './ApiDefinitionsApi';
import { ValueMappingDesigntimeArtifactsApi } from './ValueMappingDesigntimeArtifactsApi';
import { ValMapSchemaApi } from './ValMapSchemaApi';
import { ValMapsApi } from './ValMapsApi';
import { IntegrationAdapterDesigntimeArtifactsApi } from './IntegrationAdapterDesigntimeArtifactsApi';
import { CustomTagsApi } from './CustomTagsApi';
import { CustomTagConfigurationsApi } from './CustomTagConfigurationsApi';
import { DataStoresApi } from './DataStoresApi';
import { DataStoreEntriesApi } from './DataStoreEntriesApi';
import { VariablesApi } from './VariablesApi';
import { MessageMappingDesigntimeArtifactsApi } from './MessageMappingDesigntimeArtifactsApi';
import { IntegrationDesigntimeLocksApi } from './IntegrationDesigntimeLocksApi';
import { BuildAndDeployStatusApi } from './BuildAndDeployStatusApi';
import { MdiDeltaTokenApi } from './MdiDeltaTokenApi';
import { ScriptCollectionDesigntimeArtifactsApi } from './ScriptCollectionDesigntimeArtifactsApi';
import { DefaultValMapsApi } from './DefaultValMapsApi';
import {
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
    deployScriptCollectionDesigntimeArtifact,
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
} from './operations';
import { BigNumber } from 'bignumber.js';
import { Moment } from 'moment';
import {
    defaultDeSerializers,
    DeSerializers,
    DefaultDeSerializers,
    mergeDefaultDeSerializersWith,
    Time
} from '@sap-cloud-sdk/odata-v2';
import { batch, changeset } from './BatchRequest';

export function integrationContent<
    BinaryT = string,
    BooleanT = boolean,
    ByteT = number,
    DecimalT = BigNumber,
    DoubleT = number,
    FloatT = number,
    Int16T = number,
    Int32T = number,
    Int64T = BigNumber,
    GuidT = string,
    SByteT = number,
    SingleT = number,
    StringT = string,
    AnyT = any,
    DateTimeOffsetT = Moment,
    DateTimeT = Moment,
    TimeT = Time
>(
    deSerializers: Partial<
        DeSerializers<
            BinaryT,
            BooleanT,
            ByteT,
            DecimalT,
            DoubleT,
            FloatT,
            Int16T,
            Int32T,
            Int64T,
            GuidT,
            SByteT,
            SingleT,
            StringT,
            AnyT,
            DateTimeOffsetT,
            DateTimeT,
            TimeT
        >
    > = defaultDeSerializers as any
): IntegrationContent<
    DeSerializers<
        BinaryT,
        BooleanT,
        ByteT,
        DecimalT,
        DoubleT,
        FloatT,
        Int16T,
        Int32T,
        Int64T,
        GuidT,
        SByteT,
        SingleT,
        StringT,
        AnyT,
        DateTimeOffsetT,
        DateTimeT,
        TimeT
    >
> {
    return new IntegrationContent(mergeDefaultDeSerializersWith(deSerializers));
}
class IntegrationContent<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
    > {
    private apis: Record<string, any> = {};
    private deSerializers: DeSerializersT;

    constructor(deSerializers: DeSerializersT) {
        this.deSerializers = deSerializers;
    }

    private initApi(key: string, entityApi: any): any {
        if (!this.apis[key]) {
            this.apis[key] = entityApi._privateFactory(this.deSerializers);
        }
        return this.apis[key];
    }

    get integrationDesigntimeArtifactsApi(): IntegrationDesigntimeArtifactsApi<DeSerializersT> {
        const api = this.initApi(
            'integrationDesigntimeArtifactsApi',
            IntegrationDesigntimeArtifactsApi
        );
        const linkedApis = [
            this.initApi('configurationsApi', ConfigurationsApi),
            this.initApi('resourcesApi', ResourcesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get runtimeArtifactErrorInformationsApi(): RuntimeArtifactErrorInformationsApi<DeSerializersT> {
        return this.initApi(
            'runtimeArtifactErrorInformationsApi',
            RuntimeArtifactErrorInformationsApi
        );
    }

    get configurationsApi(): ConfigurationsApi<DeSerializersT> {
        return this.initApi('configurationsApi', ConfigurationsApi);
    }

    get resourcesApi(): ResourcesApi<DeSerializersT> {
        return this.initApi('resourcesApi', ResourcesApi);
    }

    get integrationRuntimeArtifacts_1Api(): IntegrationRuntimeArtifacts_1Api<DeSerializersT> {
        const api = this.initApi(
            'integrationRuntimeArtifacts_1Api',
            IntegrationRuntimeArtifacts_1Api
        );
        const linkedApis = [
            this.initApi(
                'runtimeArtifactErrorInformationsApi',
                RuntimeArtifactErrorInformationsApi
            )
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get integrationPackagesApi(): IntegrationPackagesApi<DeSerializersT> {
        const api = this.initApi('integrationPackagesApi', IntegrationPackagesApi);
        const linkedApis = [
            this.initApi(
                'integrationDesigntimeArtifactsApi',
                IntegrationDesigntimeArtifactsApi
            ),
            this.initApi(
                'valueMappingDesigntimeArtifactsApi',
                ValueMappingDesigntimeArtifactsApi
            ),
            this.initApi(
                'messageMappingDesigntimeArtifactsApi',
                MessageMappingDesigntimeArtifactsApi
            ),
            this.initApi('customTagsApi', CustomTagsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get serviceEndpointsApi(): ServiceEndpointsApi<DeSerializersT> {
        const api = this.initApi('serviceEndpointsApi', ServiceEndpointsApi);
        const linkedApis = [
            this.initApi('entryPointsApi', EntryPointsApi),
            this.initApi('apiDefinitionsApi', ApiDefinitionsApi),
            this.initApi('customTagsApi', CustomTagsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get entryPointsApi(): EntryPointsApi<DeSerializersT> {
        return this.initApi('entryPointsApi', EntryPointsApi);
    }

    get apiDefinitionsApi(): ApiDefinitionsApi<DeSerializersT> {
        return this.initApi('apiDefinitionsApi', ApiDefinitionsApi);
    }

    get valueMappingDesigntimeArtifactsApi(): ValueMappingDesigntimeArtifactsApi<DeSerializersT> {
        const api = this.initApi(
            'valueMappingDesigntimeArtifactsApi',
            ValueMappingDesigntimeArtifactsApi
        );
        const linkedApis = [this.initApi('valMapSchemaApi', ValMapSchemaApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get valMapSchemaApi(): ValMapSchemaApi<DeSerializersT> {
        const api = this.initApi('valMapSchemaApi', ValMapSchemaApi);
        const linkedApis = [
            this.initApi('valMapsApi', ValMapsApi),
            this.initApi('defaultValMapsApi', DefaultValMapsApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get valMapsApi(): ValMapsApi<DeSerializersT> {
        return this.initApi('valMapsApi', ValMapsApi);
    }

    get integrationAdapterDesigntimeArtifactsApi(): IntegrationAdapterDesigntimeArtifactsApi<DeSerializersT> {
        return this.initApi(
            'integrationAdapterDesigntimeArtifactsApi',
            IntegrationAdapterDesigntimeArtifactsApi
        );
    }

    get customTagsApi(): CustomTagsApi<DeSerializersT> {
        return this.initApi('customTagsApi', CustomTagsApi);
    }

    get customTagConfigurationsApi(): CustomTagConfigurationsApi<DeSerializersT> {
        return this.initApi(
            'customTagConfigurationsApi',
            CustomTagConfigurationsApi
        );
    }

    get dataStoresApi(): DataStoresApi<DeSerializersT> {
        const api = this.initApi('dataStoresApi', DataStoresApi);
        const linkedApis = [
            this.initApi('dataStoreEntriesApi', DataStoreEntriesApi)
        ];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get dataStoreEntriesApi(): DataStoreEntriesApi<DeSerializersT> {
        return this.initApi('dataStoreEntriesApi', DataStoreEntriesApi);
    }

    get variablesApi(): VariablesApi<DeSerializersT> {
        return this.initApi('variablesApi', VariablesApi);
    }

    get messageMappingDesigntimeArtifactsApi(): MessageMappingDesigntimeArtifactsApi<DeSerializersT> {
        const api = this.initApi(
            'messageMappingDesigntimeArtifactsApi',
            MessageMappingDesigntimeArtifactsApi
        );
        const linkedApis = [this.initApi('resourcesApi', ResourcesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get integrationDesigntimeLocksApi(): IntegrationDesigntimeLocksApi<DeSerializersT> {
        return this.initApi(
            'integrationDesigntimeLocksApi',
            IntegrationDesigntimeLocksApi
        );
    }

    get buildAndDeployStatusApi(): BuildAndDeployStatusApi<DeSerializersT> {
        return this.initApi('buildAndDeployStatusApi', BuildAndDeployStatusApi);
    }

    get mdiDeltaTokenApi(): MdiDeltaTokenApi<DeSerializersT> {
        return this.initApi('mdiDeltaTokenApi', MdiDeltaTokenApi);
    }

    get scriptCollectionDesigntimeArtifactsApi(): ScriptCollectionDesigntimeArtifactsApi<DeSerializersT> {
        const api = this.initApi(
            'scriptCollectionDesigntimeArtifactsApi',
            ScriptCollectionDesigntimeArtifactsApi
        );
        const linkedApis = [this.initApi('resourcesApi', ResourcesApi)];
        api._addNavigationProperties(linkedApis);
        return api;
    }

    get defaultValMapsApi(): DefaultValMapsApi<DeSerializersT> {
        return this.initApi('defaultValMapsApi', DefaultValMapsApi);
    }

    get operations() {
        return {
            deployIntegrationDesigntimeArtifact: (
                parameter: DeployIntegrationDesigntimeArtifactParameters<DeSerializersT>
            ) => deployIntegrationDesigntimeArtifact(parameter, this.deSerializers),
            integrationDesigntimeArtifactSaveAsVersion: (
                parameter: IntegrationDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>
            ) =>
                integrationDesigntimeArtifactSaveAsVersion(
                    parameter,
                    this.deSerializers
                ),
            copyIntegrationPackage: (
                parameter: CopyIntegrationPackageParameters<DeSerializersT>
            ) => copyIntegrationPackage(parameter, this.deSerializers),
            deployValueMappingDesigntimeArtifact: (
                parameter: DeployValueMappingDesigntimeArtifactParameters<DeSerializersT>
            ) => deployValueMappingDesigntimeArtifact(parameter, this.deSerializers),
            valueMappingDesigntimeArtifactSaveAsVersion: (
                parameter: ValueMappingDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>
            ) =>
                valueMappingDesigntimeArtifactSaveAsVersion(
                    parameter,
                    this.deSerializers
                ),
            upsertValMaps: (parameter: UpsertValMapsParameters<DeSerializersT>) =>
                upsertValMaps(parameter, this.deSerializers),
            deleteValMaps: (parameter: DeleteValMapsParameters<DeSerializersT>) =>
                deleteValMaps(parameter, this.deSerializers),
            updateDefaultValMap: (
                parameter: UpdateDefaultValMapParameters<DeSerializersT>
            ) => updateDefaultValMap(parameter, this.deSerializers),
            deployIntegrationAdapterDesigntimeArtifact: (
                parameter: DeployIntegrationAdapterDesigntimeArtifactParameters<DeSerializersT>
            ) =>
                deployIntegrationAdapterDesigntimeArtifact(
                    parameter,
                    this.deSerializers
                ),
            deployMessageMappingDesigntimeArtifact: (
                parameter: DeployMessageMappingDesigntimeArtifactParameters<DeSerializersT>
            ) =>
                deployMessageMappingDesigntimeArtifact(parameter, this.deSerializers),
            messageMappingDesigntimeArtifactSaveAsVersion: (
                parameter: MessageMappingDesigntimeArtifactSaveAsVersionParameters<DeSerializersT>
            ) =>
                messageMappingDesigntimeArtifactSaveAsVersion(
                    parameter,
                    this.deSerializers
                ),
            deployScriptCollectionDesigntimeArtifact: (
                parameter: DeployScriptCollectionDesigntimeArtifactParameters<DeSerializersT>
            ) =>
                deployScriptCollectionDesigntimeArtifact(parameter, this.deSerializers)
        };
    }

    get batch(): typeof batch {
        return batch;
    }

    get changeset(): typeof changeset {
        return changeset;
    }
}
