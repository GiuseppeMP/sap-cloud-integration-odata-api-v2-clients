/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ValueMappingDesigntimeArtifacts } from './ValueMappingDesigntimeArtifacts';
import { ValueMappingDesigntimeArtifactsRequestBuilder } from './ValueMappingDesigntimeArtifactsRequestBuilder';
import { ValMapSchemaApi } from './ValMapSchemaApi';
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
export class ValueMappingDesigntimeArtifactsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ValueMappingDesigntimeArtifacts<DeSerializersT>, DeSerializersT>
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
  ): ValueMappingDesigntimeArtifactsApi<DeSerializersT> {
    return new ValueMappingDesigntimeArtifactsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link valMapSchema} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAL_MAP_SCHEMA: Link<
      ValueMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT,
      ValMapSchemaApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ValMapSchemaApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      VAL_MAP_SCHEMA: new Link('ValMapSchema', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = ValueMappingDesigntimeArtifacts;

  requestBuilder(): ValueMappingDesigntimeArtifactsRequestBuilder<DeSerializersT> {
    return new ValueMappingDesigntimeArtifactsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ValueMappingDesigntimeArtifacts<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ValueMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ValueMappingDesigntimeArtifacts<DeSerializersT>,
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
    typeof ValueMappingDesigntimeArtifacts,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ValueMappingDesigntimeArtifacts,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ID: OrderableEdmTypeField<
      ValueMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VERSION: OrderableEdmTypeField<
      ValueMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PACKAGE_ID: OrderableEdmTypeField<
      ValueMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NAME: OrderableEdmTypeField<
      ValueMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ValueMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ARTIFACT_CONTENT: EdmTypeField<
      ValueMappingDesigntimeArtifacts<DeSerializers>,
      DeSerializersT,
      'Edm.Binary',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link valMapSchema} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    VAL_MAP_SCHEMA: Link<
      ValueMappingDesigntimeArtifacts<DeSerializersT>,
      DeSerializersT,
      ValMapSchemaApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ValueMappingDesigntimeArtifacts<DeSerializers>>;
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
          false
        ),
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
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
        ALL_FIELDS: new AllFields('*', ValueMappingDesigntimeArtifacts)
      };
    }

    return this._schema;
  }
}
