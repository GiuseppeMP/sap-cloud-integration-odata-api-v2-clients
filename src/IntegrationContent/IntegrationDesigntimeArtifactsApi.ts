/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { IntegrationDesigntimeArtifacts } from './IntegrationDesigntimeArtifacts';
import { IntegrationDesigntimeArtifactsRequestBuilder } from './IntegrationDesigntimeArtifactsRequestBuilder';
import { ConfigurationsApi } from './ConfigurationsApi';
import { ResourcesApi } from './ResourcesApi';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EdmTypeField,
  Link
} from '@sap-cloud-sdk/odata-v2';
export class IntegrationDesigntimeArtifactsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<IntegrationDesigntimeArtifacts<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): IntegrationDesigntimeArtifactsApi<DeSerializersT> {
    return new IntegrationDesigntimeArtifactsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link configurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATIONS: Link<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT,
      ConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ConfigurationsApi<DeSerializersT>,
      ResourcesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      CONFIGURATIONS: new Link('Configurations', this, linkedApis[0]),
      RESOURCES: new Link('Resources', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = IntegrationDesigntimeArtifacts;

  requestBuilder(): IntegrationDesigntimeArtifactsRequestBuilder<DeSerializersT> {
    return new IntegrationDesigntimeArtifactsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    IntegrationDesigntimeArtifacts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    IntegrationDesigntimeArtifacts<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof IntegrationDesigntimeArtifacts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        IntegrationDesigntimeArtifacts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      IntegrationDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION: OrderableEdmTypeField<
      IntegrationDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGE_ID: OrderableEdmTypeField<
      IntegrationDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NAME: OrderableEdmTypeField<
      IntegrationDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      IntegrationDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTIFACT_CONTENT: EdmTypeField<
      IntegrationDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link configurations} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CONFIGURATIONS: Link<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT,
      ConfigurationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link resources} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RESOURCES: Link<
      IntegrationDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT,
      ResourcesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<IntegrationDesigntimeArtifacts<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('Id', 'Edm.String', false),
        /**
         * Static representation of the {@link version} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VERSION: fieldBuilder.buildEdmTypeField('Version', 'Edm.String', false),
        /**
         * Static representation of the {@link packageId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKAGE_ID: fieldBuilder.buildEdmTypeField(
          'PackageId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', true),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link artifactContent} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ARTIFACT_CONTENT: fieldBuilder.buildEdmTypeField(
          'ArtifactContent',
          'Edm.Binary',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', IntegrationDesigntimeArtifacts)
      };
    }

    return this._schema;
  }
}
