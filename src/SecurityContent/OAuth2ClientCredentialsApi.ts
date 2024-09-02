/*
 * Copyright (c) 2024 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OAuth2ClientCredentials } from './OAuth2ClientCredentials';
import { OAuth2ClientCredentialsRequestBuilder } from './OAuth2ClientCredentialsRequestBuilder';
import {
  SecurityArtifactDescriptor,
  SecurityArtifactDescriptorField
} from './SecurityArtifactDescriptor';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v2';
export class OAuth2ClientCredentialsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<OAuth2ClientCredentials<DeSerializersT>, DeSerializersT>
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
  ): OAuth2ClientCredentialsApi<DeSerializersT> {
    return new OAuth2ClientCredentialsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = OAuth2ClientCredentials;

  requestBuilder(): OAuth2ClientCredentialsRequestBuilder<DeSerializersT> {
    return new OAuth2ClientCredentialsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    OAuth2ClientCredentials<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      OAuth2ClientCredentials<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    OAuth2ClientCredentials<DeSerializersT>,
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
    typeof OAuth2ClientCredentials,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        OAuth2ClientCredentials,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOKEN_SERVICE_URL: OrderableEdmTypeField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLIENT_ID: OrderableEdmTypeField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CLIENT_SECRET: OrderableEdmTypeField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLIENT_AUTHENTICATION: OrderableEdmTypeField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCOPE: OrderableEdmTypeField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SCOPE_CONTENT_TYPE: OrderableEdmTypeField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SECURITY_ARTIFACT_DESCRIPTOR: SecurityArtifactDescriptorField<
      OAuth2ClientCredentials<DeSerializers>,
      DeSerializersT,
      false,
      true
    >;
    ALL_FIELDS: AllFields<OAuth2ClientCredentials<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link tokenServiceUrl} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOKEN_SERVICE_URL: fieldBuilder.buildEdmTypeField(
          'TokenServiceUrl',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link clientId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_ID: fieldBuilder.buildEdmTypeField(
          'ClientId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link clientSecret} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_SECRET: fieldBuilder.buildEdmTypeField(
          'ClientSecret',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link clientAuthentication} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLIENT_AUTHENTICATION: fieldBuilder.buildEdmTypeField(
          'ClientAuthentication',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link scope} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE: fieldBuilder.buildEdmTypeField('Scope', 'Edm.String', true),
        /**
         * Static representation of the {@link scopeContentType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SCOPE_CONTENT_TYPE: fieldBuilder.buildEdmTypeField(
          'ScopeContentType',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link securityArtifactDescriptor} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SECURITY_ARTIFACT_DESCRIPTOR: fieldBuilder.buildComplexTypeField(
          'SecurityArtifactDescriptor',
          SecurityArtifactDescriptorField,
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', OAuth2ClientCredentials)
      };
    }

    return this._schema;
  }
}
